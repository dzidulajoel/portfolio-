import jwt from 'jsonwebtoken';
import connectDB from "@/libs/db";
import User from "@/libs/models/users";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
        try {
                // Connexion à la base de données
                await connectDB();

                // Extraction des données de la requête
                const body = await request.json();
                const { email, password } = body;

                // Validation backend: vérifier que tous les champs requis sont présents
                if (!email || !password) {
                        return NextResponse.json(
                                {
                                        success: false,
                                        message: "Email et mot de passe requis"
                                },
                                { status: 400 }
                        );
                }

                // Normalisation: conversion en lowercase pour la recherche
                const normalizedEmail = email.toLowerCase().trim();

                // Vérification métier: rechercher l'utilisateur par email
                const user = await User.findOne({ email: normalizedEmail });

                // Sécurité: message générique si utilisateur non trouvé
                if (!user) {
                        return NextResponse.json({
                                success: false,
                                message: "Email ou mot de passe incorrect"
                        }, { status: 401 });
                }

                // Vérification métier: comparaison sécurisée du mot de passe avec bcrypt
                const isPasswordValid = await bcrypt.compare(password, user.password);

                // Sécurité: message générique si mot de passe invalide
                if (!isPasswordValid) {
                        return NextResponse.json({
                                success: false,
                                message: "Email ou mot de passe incorrect"
                        }, { status: 401 });
                }

                // Auth JWT: vérification que JWT_SECRET existe
                if (!process.env.JWT_SECRET) {
                        console.error("JWT_SECRET non défini dans .env.local");
                        return NextResponse.json({
                                success: false,
                                message: "Erreur de configuration serveur"
                        }, { status: 500 });
                }

                // Auth JWT: génération du token avec payload minimal (seulement l'ID utilisateur)
                const token = jwt.sign(
                        { userId: user._id }, // Payload minimal pour la sécurité
                        process.env.JWT_SECRET,
                        { expiresIn: "7d" } // Expiration du token à 7 jours
                );

                // Sécurité: retourner les données utilisateur sans le mot de passe
                const userResponse = {
                        _id: user._id,
                        username: user.username,
                        email: user.email,
                        createdAt: user.createdAt,
                };

                // Retour du token et des données utilisateur
                return NextResponse.json(
                        {
                                success: true,
                                data: {
                                        user: userResponse,
                                        token, // Token JWT pour les futures requêtes authentifiées
                                },
                                message: "Connexion réussie",
                        },
                        { status: 200 }
                );

        } catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in POST /api/login:", error);

                // Sécurité erreurs: message générique pour l'utilisateur
                return NextResponse.json({
                        success: false,
                        message: "Erreur serveur lors de la connexion"
                }, { status: 500 });
        }
};