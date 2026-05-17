// app/api/portfolio/experiences/[id]/route.ts

import connectDB from "@/libs/db";
import Portfolio from "@/libs/models/portfolio";
import { NextRequest, NextResponse } from "next/server";

// PATCH - Modifier une expérience
export const PATCH = async (
        request: NextRequest,
        { params }: { params: Promise<{ id: string }> }
) => {
        try {
                // Connexion à la base de données
                await connectDB();

                // Extraction de l'ID depuis les paramètres
                const { id } = await params;
                // DEBUG: Affiche l'ID reçu et sa longueur
                // console.log("=== DEBUG ===");
                // console.log("ID reçu:", id);
                // console.log("Longueur:", id.length);
                // console.log("Type:", typeof id);
                // console.log("Bytes:", Buffer.from(id).toString('hex'));
                
                const portfolio = await Portfolio.findOne();
                
                // DEBUG: Affiche tous les IDs du portfolio
                // console.log("IDs dans le portfolio:");
                // portfolio?.experiences.forEach((exp: any, index: number) => {
                //         console.log(`  [${index}] ${exp._id.toString()}`);
                // });

                // Extraction des données de la requête
                const body = await request.json();
                const { title, company, description, startDate, endDate, contact } = body;

                // Vérification métier: portfolio existe
                if (!portfolio) {
                        return NextResponse.json({
                                success: false,
                                message: "Aucun portfolio trouvé"
                        }, { status: 404 });
                }

                // NOUVELLE APPROCHE: Recherche de l'expérience par comparaison de string
                const experience = portfolio.experiences.find(
                        (exp: any) => exp._id.toString() === id
                );

                // Vérification métier: expérience existe
                if (!experience) {
                        return NextResponse.json({
                                success: false,
                                message: "Expérience non trouvée"
                        }, { status: 404 });
                }

                // Contrôle des données: mise à jour uniquement des champs fournis
                if (title !== undefined) {
                        if (title.trim() === "") {
                                return NextResponse.json({
                                        success: false,
                                        message: "Le titre du poste ne peut pas être vide"
                                }, { status: 400 });
                        }
                        experience.title = title.trim();
                }

                if (company !== undefined) {
                        if (company.trim() === "") {
                                return NextResponse.json({
                                        success: false,
                                        message: "Le nom de l'entreprise ne peut pas être vide"
                                }, { status: 400 });
                        }
                        experience.company = company.trim();
                }

                if (description !== undefined) {
                        experience.description = description || null;
                }

                if (startDate !== undefined) {
                        experience.startDate = startDate ? new Date(startDate) : null;
                }

                if (endDate !== undefined) {
                        experience.endDate = endDate ? new Date(endDate) : null;
                }

                if (contact !== undefined) {
                        experience.contact = contact || null;
                }

                // Validation métier: vérifier que endDate > startDate après mise à jour
                if (experience.startDate && experience.endDate) {
                        if (experience.endDate < experience.startDate) {
                                return NextResponse.json({
                                        success: false,
                                        message: "La date de fin doit être postérieure à la date de début"
                                }, { status: 400 });
                        }
                }

                // Sauvegarde des modifications
                await portfolio.save();

                return NextResponse.json(
                        {
                                success: true,
                                data: experience,
                                message: "Expérience mise à jour avec succès",
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in PATCH /api/portfolio/experiences/[id]:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la mise à jour de l'expérience"
                }, { status: 500 });
        }
};

// DELETE - Supprimer une expérience
export const DELETE = async (
        request: NextRequest,
        { params }: { params: Promise<{ id: string }> }
) => {
        try {
                // Connexion à la base de données
                await connectDB();

                // Extraction de l'ID depuis les paramètres
                const { id } = await params;

                // Récupération du portfolio
                const portfolio = await Portfolio.findOne();

                // Vérification métier: portfolio existe
                if (!portfolio) {
                        return NextResponse.json({
                                success: false,
                                message: "Aucun portfolio trouvé"
                        }, { status: 404 });
                }

                // NOUVELLE APPROCHE: Recherche de l'index de l'expérience
                const experienceIndex = portfolio.experiences.findIndex(
                        (exp: any) => exp._id.toString() === id
                );

                // Vérification métier: expérience existe
                if (experienceIndex === -1) {
                        return NextResponse.json({
                                success: false,
                                message: "Expérience non trouvée"
                        }, { status: 404 });
                }

                // Suppression de l'expérience par son index
                portfolio.experiences.splice(experienceIndex, 1);
                await portfolio.save();

                return NextResponse.json(
                        {
                                success: true,
                                message: "Expérience supprimée avec succès",
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in DELETE /api/portfolio/experiences/[id]:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la suppression de l'expérience"
                }, { status: 500 });
        }
};