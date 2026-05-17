import mongoose from "mongoose";

export const ProjectSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true,
        },

        type: {
                type: String,
                enum: ["web", "web-app", "website", "mobile-app"],
                default: null,
        },

        shortDescription: {
                type: String,
                default: null,
        },

        detailedDescription: {
                type: String,
                default: null,
        },

        githubUrl: {
                type: String,
                default: null,
        },

        liveUrl: {
                type: String,
                default: null,
        },

        technologies: {
                frontend: { type: [String], default: [] },
                backend: { type: [String], default: [] },
                extra: { type: [String], default: [] },
        },

        features: {
                type: [String],
                default: [],
        },

        challenges: {
                type: [String],
                default: [],
        },

        learnings: {
                type: String,
                default: null,
        },

        projectInfo: {
                duration: { type: String, default: null },

                clientType: {
                        type: String,
                        enum: ["client", "personal"],
                        default: null,
                },

                status: {
                        type: String,
                        enum: ["development", "production"],
                        default: "development",
                },
        },

        media: {
                images: { type: [String], default: [] },
                video: { type: String, default: null },
        },
});