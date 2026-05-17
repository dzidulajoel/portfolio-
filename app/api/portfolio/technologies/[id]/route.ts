// app/api/portfolio/technologies/[id]/route.ts

import connectDB from "@/libs/db";
import Portfolio from "@/libs/models/portfolio";
import { NextRequest, NextResponse } from "next/server";

// PATCH - Modifier une technologie
export const PATCH = async (
        request: NextRequest,
        { params }: { params: Promise<{ id: string }> }
) => {
        try {
                // Connexion à la base de données
                await connectDB();

                // Extraction de l'ID depuis les paramètres (Next.js 15+)
                const { id } = await params;

                // Extraction des données de la requête
                const body = await request.json();
                const { name, icon, color, type, level } = body;

                // Validation backend: type doit être valide si fourni
                if (type !== undefined && type !== null && !["frontend", "backend", "fullstack", "devops"].includes(type)) {
                        return NextResponse.json(
                                { 
                                        success: false, 
                                        message: "Type invalide. Valeurs acceptées: frontend, backend, fullstack, devops" 
                                },
                                { status: 400 }
                        );
                }

                // Validation backend: level doit être valide si fourni
                if (level !== undefined && level !== null && !["beginner", "intermediate", "expert"].includes(level)) {
                        return NextResponse.json(
                                { 
                                        success: false, 
                                        message: "Niveau invalide. Valeurs acceptées: beginner, intermediate, expert" 
                                },
                                { status: 400 }
                        );
                }

                // Récupération du portfolio
                const portfolio = await Portfolio.findOne();

                // Vérification métier: portfolio existe
                if (!portfolio) {
                        return NextResponse.json({
                                success: false,
                                message: "Aucun portfolio trouvé"
                        }, { status: 404 });
                }

                // Recherche de la technologie par comparaison de string
                const technology = portfolio.technologies.find(
                        (tech: any) => tech._id.toString() === id
                );

                // Vérification métier: technologie existe
                if (!technology) {
                        return NextResponse.json({
                                success: false,
                                message: "Technologie non trouvée"
                        }, { status: 404 });
                }

                // Contrôle des données: mise à jour uniquement des champs fournis
                if (name !== undefined) {
                        // Validation: name ne peut pas être vide s'il est fourni
                        if (name.trim() === "") {
                                return NextResponse.json({
                                        success: false,
                                        message: "Le nom de la technologie ne peut pas être vide"
                                }, { status: 400 });
                        }

                        // Vérification métier: éviter les doublons lors de la modification
                        const duplicateTech = portfolio.technologies.find(
                                (tech: any) => 
                                        tech._id.toString() !== id && 
                                        tech.name.toLowerCase() === name.trim().toLowerCase()
                        );

                        if (duplicateTech) {
                                return NextResponse.json({
                                        success: false,
                                        message: "Une technologie avec ce nom existe déjà"
                                }, { status: 409 });
                        }

                        technology.name = name.trim();
                }

                if (icon !== undefined) {
                        technology.icon = icon || null;
                }

                if (color !== undefined) {
                        technology.color = color || null;
                }

                if (type !== undefined) {
                        technology.type = type || null;
                }

                if (level !== undefined) {
                        technology.level = level || null;
                }

                // Sauvegarde des modifications
                await portfolio.save();

                return NextResponse.json(
                        {
                                success: true,
                                data: technology,
                                message: "Technologie mise à jour avec succès",
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in PATCH /api/portfolio/technologies/[id]:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la mise à jour de la technologie"
                }, { status: 500 });
        }
};

// DELETE - Supprimer une technologie
export const DELETE = async (
        request: NextRequest,
        { params }: { params: Promise<{ id: string }> }
) => {
        try {
                // Connexion à la base de données
                await connectDB();

                // Extraction de l'ID depuis les paramètres (Next.js 15+)
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

                // Recherche de l'index de la technologie
                const technologyIndex = portfolio.technologies.findIndex(
                        (tech: any) => tech._id.toString() === id
                );

                // Vérification métier: technologie existe
                if (technologyIndex === -1) {
                        return NextResponse.json({
                                success: false,
                                message: "Technologie non trouvée"
                        }, { status: 404 });
                }

                // Suppression de la technologie par son index
                portfolio.technologies.splice(technologyIndex, 1);
                await portfolio.save();

                return NextResponse.json(
                        {
                                success: true,
                                message: "Technologie supprimée avec succès",
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in DELETE /api/portfolio/technologies/[id]:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la suppression de la technologie"
                }, { status: 500 });
        }
};