import mongoose from "mongoose";

export const StatsSchema = new mongoose.Schema({
        careerStartDate: {
                type: Date,
                default: null,
        },

        experienceYears: {
                type: Number,
                default: 0,
        },

        projectsCount: {
                type: Number,
                default: 0,
        },

        clientsSatisfied: {
                type: Number,
                default: 0,
        },
});