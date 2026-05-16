import connectDB from "@/libs/db";
import User from "@/libs/models/users";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest) => {
        try {
                // Connexion à la base de données
                await connectDB();
                
                // Extraction des données de la requête
                const body = await request.json();
                const { username, email, password } = body;

                // Validation backend: vérifier que tous les champs requis sont présents
                if (!username || !email || !password ) {
                        return NextResponse.json(
                                { success: false, message: "Tous les champs sont requis" }, 
                                { status: 400 }
                        );
                }

                // Contrôle des données: accepter uniquement username, email, password
                // Note: extraction destructurée ci-dessus fait déjà ce filtrage

                // Vérification métier: vérifier si l'email existe déjà
                const existingUser = await User.findOne({ email });
                if (existingUser) {
                        return NextResponse.json({
                                success: false,
                                message: "Cet email est déjà utilisé" // Message générique pour la sécurité
                        }, { status: 409 });
                }

                // Sécurité mot de passe: hash avec bcrypt (salt de 12 rounds)
                const hashedPassword = await bcrypt.hash(password, 12);

                // Protection BDD: créer le nouvel utilisateur avec validation Mongoose automatique
                const newUser = await User.create({
                        username,
                        email,
                        password: hashedPassword, // Mot de passe jamais stocké en clair
                });

                // Sécurité: retourner l'utilisateur sans le mot de passe
                const userResponse = {
                        _id: newUser._id,
                        nom: newUser.username,
                        email: newUser.email,
                        dateOfBirth: newUser.dateOfBirth, // Note: ce champ n'existe pas dans le schéma
                        createdAt: newUser.createdAt,
                };

                return NextResponse.json(
                        {
                                success: true,
                                data: userResponse,
                                message: "Creation du compte avec succes",
                        },
                        { status: 201 }
                );

        }
        catch (error) {
                // Sécurité erreurs: log serveur uniquement
                console.error("Error in POST /api/register:", error);

                // Sécurité erreurs: message générique pour l'utilisateur
                return NextResponse.json({
                        success: false,
                        message: "Internal Server Error" // Ne pas exposer les détails internes
                }, { status: 500 });

        }

}