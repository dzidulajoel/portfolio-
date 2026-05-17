// app/api/portfolio/profile/route.ts
import connectDB from "@/libs/db";
import Portfolio from "@/libs/models/portfolio";
import { NextRequest, NextResponse } from "next/server";

// POST - Créer un profil portfolio (première fois)
export const POST = async (request: NextRequest) => {
        try {
                // Connexion à la base de données
                await connectDB();

                // Extraction des données de la requête
                const body = await request.json();
                const { fullName, profession, shortDescription, detailedDescription, socialLinks } = body;

                // Validation backend: fullName est le seul champ obligatoire
                if (!fullName || fullName.trim() === "") {
                        return NextResponse.json(
                                {
                                        success: false,
                                        message: "Le nom complet est requis"
                                },
                                { status: 400 }
                        );
                }

                // Vérification métier: empêcher la création de plusieurs portfolios
                // Normalement lié à un userId, mais pour l'instant on limite à 1 seul
                const existingPortfolio = await Portfolio.findOne();
                if (existingPortfolio) {
                        return NextResponse.json({
                                success: false,
                                message: "Un portfolio existe déjà. Utilisez PATCH pour le modifier."
                        }, { status: 409 });
                }

                // Contrôle des données: construction de l'objet profile avec valeurs par défaut
                const profileData = {
                        fullName: fullName.trim(),
                        profession: profession?.trim() || null,
                        shortDescription: shortDescription || null,
                        detailedDescription: detailedDescription || null,
                        socialLinks: {
                                linkedin: socialLinks?.linkedin || null,
                                whatsapp: socialLinks?.whatsapp || null,
                                github: socialLinks?.github || null,
                                email: socialLinks?.email || null,
                        }
                };

                // Création du portfolio avec le profil
                const newPortfolio = await Portfolio.create({
                        profile: profileData,
                        stats: {}, // Initialisé vide
                        experiences: [],
                        technologies: [],
                        projects: [],
                });

                return NextResponse.json(
                        {
                                success: true,
                                data: newPortfolio.profile,
                                message: "Profil créé avec succès",
                        },
                        { status: 201 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in POST /api/portfolio/profile:", error);

                // Sécurité erreurs: message générique pour l'utilisateur
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la création du profil"
                }, { status: 500 });
        }
};

// GET - Récupérer le profil portfolio
export const GET = async (request: NextRequest) => {
        try {
                // Connexion à la base de données
                await connectDB();

                // Récupération du portfolio (pour l'instant on récupère le premier trouvé)
                const portfolio = await Portfolio.findOne();

                // Vérification métier: portfolio existe
                if (!portfolio) {
                        return NextResponse.json({
                                success: false,
                                message: "Aucun portfolio trouvé"
                        }, { status: 404 });
                }

                // Retour uniquement du profil
                return NextResponse.json(
                        {
                                success: true,
                                data: portfolio.profile,
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in GET /api/portfolio/profile:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la récupération du profil"
                }, { status: 500 });
        }
};

// PATCH - Mettre à jour le profil portfolio
export const PATCH = async (request: NextRequest) => {
        try {
                // Connexion à la base de données
                await connectDB();

                // Extraction des données de la requête
                const body = await request.json();
                const { fullName, profession, shortDescription, detailedDescription, socialLinks } = body;

                // Récupération du portfolio existant
                const portfolio = await Portfolio.findOne();

                // Vérification métier: portfolio existe
                if (!portfolio) {
                        return NextResponse.json({
                                success: false,
                                message: "Aucun portfolio trouvé. Utilisez POST pour en créer un."
                        }, { status: 404 });
                }

                // Contrôle des données: mise à jour uniquement des champs fournis
                if (fullName !== undefined) {
                        // Validation: fullName ne peut pas être vide s'il est fourni
                        if (fullName.trim() === "") {
                                return NextResponse.json({
                                        success: false,
                                        message: "Le nom complet ne peut pas être vide"
                                }, { status: 400 });
                        }
                        portfolio.profile.fullName = fullName.trim();
                }

                if (profession !== undefined) {
                        portfolio.profile.profession = profession?.trim() || null;
                }

                if (shortDescription !== undefined) {
                        portfolio.profile.shortDescription = shortDescription || null;
                }

                if (detailedDescription !== undefined) {
                        portfolio.profile.detailedDescription = detailedDescription || null;
                }

                // Mise à jour des liens sociaux (partielle ou complète)
                if (socialLinks !== undefined) {
                        if (socialLinks.linkedin !== undefined) {
                                portfolio.profile.socialLinks.linkedin = socialLinks.linkedin || null;
                        }
                        if (socialLinks.whatsapp !== undefined) {
                                portfolio.profile.socialLinks.whatsapp = socialLinks.whatsapp || null;
                        }
                        if (socialLinks.github !== undefined) {
                                portfolio.profile.socialLinks.github = socialLinks.github || null;
                        }
                        if (socialLinks.email !== undefined) {
                                portfolio.profile.socialLinks.email = socialLinks.email || null;
                        }
                }

                // Sauvegarde des modifications
                await portfolio.save();

                return NextResponse.json(
                        {
                                success: true,
                                data: portfolio.profile,
                                message: "Profil mis à jour avec succès",
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in PATCH /api/portfolio/profile:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la mise à jour du profil"
                }, { status: 500 });
        }
};

// DELETE - Supprimer le profil (et tout le portfolio)
export const DELETE = async (request: NextRequest) => {
        try {
                // Connexion à la base de données
                await connectDB();

                // Récupération et suppression du portfolio
                const portfolio = await Portfolio.findOneAndDelete();

                // Vérification métier: portfolio existe
                if (!portfolio) {
                        return NextResponse.json({
                                success: false,
                                message: "Aucun portfolio trouvé"
                        }, { status: 404 });
                }

                return NextResponse.json(
                        {
                                success: true,
                                message: "Portfolio supprimé avec succès",
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in DELETE /api/portfolio/profile:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la suppression du portfolio"
                }, { status: 500 });
        }
};