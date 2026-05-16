import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
        {
                username: {
                        type: String,
                        required: [true, "Le nom est requis"],
                        trim: true, // Normalisation: suppression des espaces au début/fin
                        minlength: [3, "Minimum 3 caractères"], // Validation: longueur minimale
                        maxlength: [20, "Maximum 20 caractères"], // Validation: longueur maximale
                },

                email: {
                        type: String,
                        required: [true, "L'email est requis"], // Validation: champ obligatoire
                        unique: true, // Protection BDD: empêche les doublons
                        trim: true, // Normalisation: suppression des espaces
                        lowercase: true, // Normalisation: conversion en minuscules

                        match: [
                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                "Email invalide", // Validation: format email valide
                        ],
                },

                password: {
                        type: String,
                        required: [true, "Le mot de passe est requis"], // Validation: champ obligatoire
                        minlength: [8, "Minimum 8 caractères"], // Validation: sécurité mot de passe
                },
        },

        {
                timestamps: true, // Ajoute createdAt et updatedAt automatiquement
        }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;