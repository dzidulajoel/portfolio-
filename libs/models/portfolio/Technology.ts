import mongoose from "mongoose";

export const TechnologySchema = new mongoose.Schema({
        name: {
                type: String,
                required: true,
                trim: true,
        },

        icon: {
                type: String,
                default: null,
        },

        color: {
                type: String,
                default: null,
        },

        type: {
                type: String,
                enum: ["frontend", "backend", "fullstack", "devops"],
                default: null,
        },

        level: {
                type: String,
                enum: ["beginner", "intermediate", "expert"],
                default: null,
        },
});