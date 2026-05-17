// app/api/portfolio/experiences/route.ts
import connectDB from "@/libs/db";
import Portfolio from "@/libs/models/portfolio";
import { NextRequest, NextResponse } from "next/server";

// POST - Ajouter une expérience
export const POST = async (request: NextRequest) => {
        try {
                // Connexion à la base de données
                await connectDB();

                // Extraction des données de la requête
                const body = await request.json();
                const { title, company, description, startDate, endDate, contact } = body;

                // Validation backend: champs obligatoires
                if (!title || title.trim() === "") {
                        return NextResponse.json(
                                {
                                        success: false,
                                        message: "Le titre du poste est requis"
                                },
                                { status: 400 }
                        );
                }

                if (!company || company.trim() === "") {
                        return NextResponse.json(
                                {
                                        success: false,
                                        message: "Le nom de l'entreprise est requis"
                                },
                                { status: 400 }
                        );
                }

                // Récupération du portfolio existant
                const portfolio = await Portfolio.findOne();

                // Vérification métier: portfolio existe
                if (!portfolio) {
                        return NextResponse.json({
                                success: false,
                                message: "Aucun portfolio trouvé. Créez d'abord un profil."
                        }, { status: 404 });
                }

                // Contrôle des données: construction de l'objet expérience
                const newExperience = {
                        title: title.trim(),
                        company: company.trim(),
                        description: description || null,
                        startDate: startDate ? new Date(startDate) : null,
                        endDate: endDate ? new Date(endDate) : null,
                        contact: contact || null,
                };

                // Validation métier: vérifier que endDate > startDate si les deux sont fournis
                if (newExperience.startDate && newExperience.endDate) {
                        if (newExperience.endDate < newExperience.startDate) {
                                return NextResponse.json({
                                        success: false,
                                        message: "La date de fin doit être postérieure à la date de début"
                                }, { status: 400 });
                        }
                }

                // Ajout de l'expérience au tableau
                portfolio.experiences.push(newExperience);
                await portfolio.save();

                // Récupération de l'expérience ajoutée (dernier élément)
                const addedExperience = portfolio.experiences[portfolio.experiences.length - 1];

                return NextResponse.json(
                        {
                                success: true,
                                data: addedExperience,
                                message: "Expérience ajoutée avec succès",
                        },
                        { status: 201 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in POST /api/portfolio/experiences:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de l'ajout de l'expérience"
                }, { status: 500 });
        }
};

// GET - Lister toutes les expériences
export const GET = async (request: NextRequest) => {
        try {
                // Connexion à la base de données
                await connectDB();

                // Récupération du portfolio
                const portfolio = await Portfolio.findOne();

                // Vérification métier: portfolio existe
                if (!portfolio) {
                        return NextResponse.json({
                                success: false,
                                message: "Aucun portfolio trouvé"
                        }, { status: 404 });
                }

                // Retour de toutes les expériences (peut être un tableau vide)
                return NextResponse.json(
                        {
                                success: true,
                                data: portfolio.experiences,
                                count: portfolio.experiences.length,
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in GET /api/portfolio/experiences:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la récupération des expériences"
                }, { status: 500 });
        }
};