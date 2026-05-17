// app/api/portfolio/projects/[id]/route.ts

import connectDB from "@/libs/db";
import Portfolio from "@/libs/models/portfolio";
import { NextRequest, NextResponse } from "next/server";

// PATCH - Modifier un projet
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

                // Validation backend: type doit être valide si fourni
                if (type !== undefined && type !== null && !["web", "web-app", "website", "mobile-app"].includes(type)) {
                        return NextResponse.json(
                                { 
                                        success: false, 
                                        message: "Type invalide. Valeurs acceptées: web, web-app, website, mobile-app" 
                                },
                                { status: 400 }
                        );
                }

                // Validation backend: clientType doit être valide si fourni
                if (projectInfo?.clientType !== undefined && projectInfo?.clientType !== null && !["client", "personal"].includes(projectInfo.clientType)) {
                        return NextResponse.json(
                                { 
                                        success: false, 
                                        message: "Type de client invalide. Valeurs acceptées: client, personal" 
                                },
                                { status: 400 }
                        );
                }

                // Validation backend: status doit être valide si fourni
                if (projectInfo?.status !== undefined && projectInfo?.status !== null && !["development", "production"].includes(projectInfo.status)) {
                        return NextResponse.json(
                                { 
                                        success: false, 
                                        message: "Statut invalide. Valeurs acceptées: development, production" 
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

                // Recherche du projet par comparaison de string
                const project = portfolio.projects.find(
                        (proj: any) => proj._id.toString() === id
                );

                // Vérification métier: projet existe
                if (!project) {
                        return NextResponse.json({
                                success: false,
                                message: "Projet non trouvé"
                        }, { status: 404 });
                }

                // Contrôle des données: mise à jour uniquement des champs fournis
                if (name !== undefined) {
                        // Validation: name ne peut pas être vide s'il est fourni
                        if (name.trim() === "") {
                                return NextResponse.json({
                                        success: false,
                                        message: "Le nom du projet ne peut pas être vide"
                                }, { status: 400 });
                        }

                        // Vérification métier: éviter les doublons lors de la modification
                        const duplicateProject = portfolio.projects.find(
                                (proj: any) => 
                                        proj._id.toString() !== id && 
                                        proj.name.toLowerCase() === name.trim().toLowerCase()
                        );

                        if (duplicateProject) {
                                return NextResponse.json({
                                        success: false,
                                        message: "Un projet avec ce nom existe déjà"
                                }, { status: 409 });
                        }

                        project.name = name.trim();
                }

                if (type !== undefined) {
                        project.type = type || null;
                }

                if (shortDescription !== undefined) {
                        project.shortDescription = shortDescription || null;
                }

                if (detailedDescription !== undefined) {
                        project.detailedDescription = detailedDescription || null;
                }

                if (githubUrl !== undefined) {
                        project.githubUrl = githubUrl || null;
                }

                if (liveUrl !== undefined) {
                        project.liveUrl = liveUrl || null;
                }

                // Mise à jour des technologies (partielle ou complète)
                if (technologies !== undefined) {
                        if (technologies.frontend !== undefined) {
                                project.technologies.frontend = technologies.frontend || [];
                        }
                        if (technologies.backend !== undefined) {
                                project.technologies.backend = technologies.backend || [];
                        }
                        if (technologies.extra !== undefined) {
                                project.technologies.extra = technologies.extra || [];
                        }
                }

                if (features !== undefined) {
                        project.features = features || [];
                }

                if (challenges !== undefined) {
                        project.challenges = challenges || [];
                }

                if (learnings !== undefined) {
                        project.learnings = learnings || null;
                }

                // Mise à jour des projectInfo (partielle)
                if (projectInfo !== undefined) {
                        if (projectInfo.duration !== undefined) {
                                project.projectInfo.duration = projectInfo.duration || null;
                        }
                        if (projectInfo.clientType !== undefined) {
                                project.projectInfo.clientType = projectInfo.clientType || null;
                        }
                        if (projectInfo.status !== undefined) {
                                project.projectInfo.status = projectInfo.status || "development";
                        }
                }

                // Mise à jour des media (partielle)
                if (media !== undefined) {
                        if (media.images !== undefined) {
                                project.media.images = media.images || [];
                        }
                        if (media.video !== undefined) {
                                project.media.video = media.video || null;
                        }
                }

                // Sauvegarde des modifications
                await portfolio.save();

                return NextResponse.json(
                        {
                                success: true,
                                data: project,
                                message: "Projet mis à jour avec succès",
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in PATCH /api/portfolio/projects/[id]:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la mise à jour du projet"
                }, { status: 500 });
        }
};

// DELETE - Supprimer un projet
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

                // Recherche de l'index du projet
                const projectIndex = portfolio.projects.findIndex(
                        (proj: any) => proj._id.toString() === id
                );

                // Vérification métier: projet existe
                if (projectIndex === -1) {
                        return NextResponse.json({
                                success: false,
                                message: "Projet non trouvé"
                        }, { status: 404 });
                }

                // Suppression du projet par son index
                portfolio.projects.splice(projectIndex, 1);
                await portfolio.save();

                return NextResponse.json(
                        {
                                success: true,
                                message: "Projet supprimé avec succès",
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in DELETE /api/portfolio/projects/[id]:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la suppression du projet"
                }, { status: 500 });
        }
};