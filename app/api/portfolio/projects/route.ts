// app/api/portfolio/projects/route.ts

import connectDB from "@/libs/db";
import Portfolio from "@/libs/models/portfolio";
import { NextRequest, NextResponse } from "next/server";

// POST - Ajouter un projet
export const POST = async (request: NextRequest) => {
        try {
                // Connexion à la base de données
                await connectDB();

                // Extraction des données de la requête
                const body = await request.json();
                const {
                        name,
                        type,
                        shortDescription,
                        detailedDescription,
                        githubUrl,
                        liveUrl,
                        technologies,
                        features,
                        challenges,
                        learnings,
                        projectInfo,
                        media
                } = body;

                // Validation backend: champs obligatoires
                if (!name || name.trim() === "") {
                        return NextResponse.json(
                                {
                                        success: false,
                                        message: "Le nom du projet est requis"
                                },
                                { status: 400 }
                        );
                }

                // Validation backend: type doit être valide si fourni
                if (type && !["web", "web-app", "website", "mobile-app"].includes(type)) {
                        return NextResponse.json(
                                {
                                        success: false,
                                        message: "Type invalide. Valeurs acceptées: web, web-app, website, mobile-app"
                                },
                                { status: 400 }
                        );
                }

                // Validation backend: clientType doit être valide si fourni
                if (projectInfo?.clientType && !["client", "personal"].includes(projectInfo.clientType)) {
                        return NextResponse.json(
                                {
                                        success: false,
                                        message: "Type de client invalide. Valeurs acceptées: client, personal"
                                },
                                { status: 400 }
                        );
                }

                // Validation backend: status doit être valide si fourni
                if (projectInfo?.status && !["development", "production"].includes(projectInfo.status)) {
                        return NextResponse.json(
                                {
                                        success: false,
                                        message: "Statut invalide. Valeurs acceptées: development, production"
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

                // Vérification métier: éviter les doublons de projet
                const existingProject = portfolio.projects.find(
                        (proj: any) => proj.name.toLowerCase() === name.trim().toLowerCase()
                );

                if (existingProject) {
                        return NextResponse.json({
                                success: false,
                                message: "Un projet avec ce nom existe déjà"
                        }, { status: 409 });
                }

                // Contrôle des données: construction de l'objet projet
                const newProject = {
                        name: name.trim(),
                        type: type || null,
                        shortDescription: shortDescription || null,
                        detailedDescription: detailedDescription || null,
                        githubUrl: githubUrl || null,
                        liveUrl: liveUrl || null,
                        technologies: {
                                frontend: technologies?.frontend || [],
                                backend: technologies?.backend || [],
                                extra: technologies?.extra || [],
                        },
                        features: features || [],
                        challenges: challenges || [],
                        learnings: learnings || null,
                        projectInfo: {
                                duration: projectInfo?.duration || null,
                                clientType: projectInfo?.clientType || null,
                                status: projectInfo?.status || "development",
                        },
                        media: {
                                images: media?.images || [],
                                video: media?.video || null,
                        },
                };

                // Ajout du projet au tableau
                portfolio.projects.push(newProject);
                await portfolio.save();

                // Récupération du projet ajouté (dernier élément)
                const addedProject = portfolio.projects[portfolio.projects.length - 1];

                return NextResponse.json(
                        {
                                success: true,
                                data: addedProject,
                                message: "Projet ajouté avec succès",
                        },
                        { status: 201 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in POST /api/portfolio/projects:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de l'ajout du projet"
                }, { status: 500 });
        }
};

// GET - Lister tous les projets
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

                // Retour de tous les projets (peut être un tableau vide)
                return NextResponse.json(
                        {
                                success: true,
                                data: portfolio.projects,
                                count: portfolio.projects.length,
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in GET /api/portfolio/projects:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la récupération des projets"
                }, { status: 500 });
        }
};