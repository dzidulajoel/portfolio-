import mongoose from "mongoose";

export const ExperienceSchema = new mongoose.Schema({
        title: {
                type: String,
                required: true,
                trim: true,
        },

        company: {
                type: String,
                required: true,
                trim: true,
        },

        description: {
                type: String,
                default: null,
        },

        startDate: {
                type: Date,
                default: null,
        },

        endDate: {
                type: Date,
                default: null,
        },

        contact: {
                type: String,
                default: null,
        },
});