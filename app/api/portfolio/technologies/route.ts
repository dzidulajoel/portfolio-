// app/api/portfolio/technologies/route.ts

import connectDB from "@/libs/db";
import Portfolio from "@/libs/models/portfolio";
import { NextRequest, NextResponse } from "next/server";

// POST - Ajouter une technologie
export const POST = async (request: NextRequest) => {
        try {
                // Connexion à la base de données
                await connectDB();

                // Extraction des données de la requête
                const body = await request.json();
                const { name, icon, color, type, level } = body;

                // Validation backend: champs obligatoires
                if (!name || name.trim() === "") {
                        return NextResponse.json(
                                { 
                                        success: false, 
                                        message: "Le nom de la technologie est requis" 
                                },
                                { status: 400 }
                        );
                }

                // Validation backend: type doit être valide si fourni
                if (type && !["frontend", "backend", "fullstack", "devops"].includes(type)) {
                        return NextResponse.json(
                                { 
                                        success: false, 
                                        message: "Type invalide. Valeurs acceptées: frontend, backend, fullstack, devops" 
                                },
                                { status: 400 }
                        );
                }

                // Validation backend: level doit être valide si fourni
                if (level && !["beginner", "intermediate", "expert"].includes(level)) {
                        return NextResponse.json(
                                { 
                                        success: false, 
                                        message: "Niveau invalide. Valeurs acceptées: beginner, intermediate, expert" 
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

                // Vérification métier: éviter les doublons de technologie
                const existingTech = portfolio.technologies.find(
                        (tech: any) => tech.name.toLowerCase() === name.trim().toLowerCase()
                );

                if (existingTech) {
                        return NextResponse.json({
                                success: false,
                                message: "Cette technologie existe déjà"
                        }, { status: 409 });
                }

                // Contrôle des données: construction de l'objet technologie
                const newTechnology = {
                        name: name.trim(),
                        icon: icon || null,
                        color: color || null,
                        type: type || null,
                        level: level || null,
                };

                // Ajout de la technologie au tableau
                portfolio.technologies.push(newTechnology);
                await portfolio.save();

                // Récupération de la technologie ajoutée (dernier élément)
                const addedTechnology = portfolio.technologies[portfolio.technologies.length - 1];

                return NextResponse.json(
                        {
                                success: true,
                                data: addedTechnology,
                                message: "Technologie ajoutée avec succès",
                        },
                        { status: 201 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in POST /api/portfolio/technologies:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de l'ajout de la technologie"
                }, { status: 500 });
        }
};

// GET - Lister toutes les technologies
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

                // Retour de toutes les technologies (peut être un tableau vide)
                return NextResponse.json(
                        {
                                success: true,
                                data: portfolio.technologies,
                                count: portfolio.technologies.length,
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in GET /api/portfolio/technologies:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la récupération des technologies"
                }, { status: 500 });
        }
};