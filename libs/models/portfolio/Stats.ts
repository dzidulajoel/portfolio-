import mongoose from "mongoose";

export const StatsSchema = new mongoose.Schema({
        careerStartDate: {
                type: Date,
                default: null,
        }
});