// app/api/portfolio/stats/route.ts

import connectDB from "@/libs/db";
import Portfolio from "@/libs/models/portfolio";
import { NextRequest, NextResponse } from "next/server";

// POST - Créer les stats (première fois)
export const POST = async (request: NextRequest) => {
        try {
                // Connexion à la base de données
                await connectDB();

                // Extraction des données de la requête
                const body = await request.json();
                const { careerStartDate } = body;

                // Récupération du portfolio existant
                const portfolio = await Portfolio.findOne();

                // Vérification métier: portfolio existe
                if (!portfolio) {
                        return NextResponse.json({
                                success: false,
                                message: "Aucun portfolio trouvé. Créez d'abord un profil."
                        }, { status: 404 });
                }

                // Vérification métier: stats déjà configurées
                if (portfolio.stats && portfolio.stats.careerStartDate !== undefined) {
                        return NextResponse.json({
                                success: false,
                                message: "Les stats existent déjà. Utilisez PATCH pour les modifier."
                        }, { status: 409 });
                }

                // Contrôle des données: construction de l'objet stats
                portfolio.stats = {
                        careerStartDate: careerStartDate ? new Date(careerStartDate) : null,
                };

                // Sauvegarde des modifications
                await portfolio.save();

                return NextResponse.json(
                        {
                                success: true,
                                data: portfolio.stats,
                                message: "Stats créées avec succès",
                        },
                        { status: 201 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in POST /api/portfolio/stats:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la création des stats"
                }, { status: 500 });
        }
};

// GET - Récupérer les stats
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

                // Retour des stats
                return NextResponse.json(
                        {
                                success: true,
                                data: portfolio.stats || { careerStartDate: null },
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in GET /api/portfolio/stats:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la récupération des stats"
                }, { status: 500 });
        }
};

// PATCH - Mettre à jour les stats
export const PATCH = async (request: NextRequest) => {
        try {
                // Connexion à la base de données
                await connectDB();

                // Extraction des données de la requête
                const body = await request.json();
                const { careerStartDate } = body;

                // Récupération du portfolio existant
                const portfolio = await Portfolio.findOne();

                // Vérification métier: portfolio existe
                if (!portfolio) {
                        return NextResponse.json({
                                success: false,
                                message: "Aucun portfolio trouvé. Utilisez POST pour créer les stats."
                        }, { status: 404 });
                }

                // Contrôle des données: mise à jour du champ careerStartDate
                if (careerStartDate !== undefined) {
                        // Initialiser stats si n'existe pas
                        if (!portfolio.stats) {
                                portfolio.stats = {};
                        }
                        portfolio.stats.careerStartDate = careerStartDate ? new Date(careerStartDate) : null;
                }

                // Sauvegarde des modifications
                await portfolio.save();

                return NextResponse.json(
                        {
                                success: true,
                                data: portfolio.stats,
                                message: "Stats mises à jour avec succès",
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in PATCH /api/portfolio/stats:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la mise à jour des stats"
                }, { status: 500 });
        }
};

// DELETE - Supprimer les stats (réinitialiser)
export const DELETE = async (request: NextRequest) => {
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

                // Réinitialisation des stats
                portfolio.stats = {
                        careerStartDate: null,
                };

                await portfolio.save();

                return NextResponse.json(
                        {
                                success: true,
                                message: "Stats réinitialisées avec succès",
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in DELETE /api/portfolio/stats:", error);

                // Sécurité erreurs: message générique
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la suppression des stats"
                }, { status: 500 });
        }
};