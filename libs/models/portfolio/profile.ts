import mongoose from "mongoose";

export const ProfileSchema = new mongoose.Schema({
        fullName: {
                type: String,
                required: true,
                trim: true,
        },

        profession: {
                type: String,
                default: null,
                trim: true,
        },

        shortDescription: {
                type: String,
                default: null,
        },

        detailedDescription: {
                type: String,
                default: null,
        },

        socialLinks: {
                linkedin: { type: String, default: null },
                whatsapp: { type: String, default: null },
                github: { type: String, default: null },
                email: { type: String, default: null },
        },
});