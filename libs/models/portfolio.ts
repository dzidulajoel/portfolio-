import mongoose from "mongoose";
import { ProfileSchema } from "./portfolio/profile";
import { StatsSchema } from "./portfolio/Stats";
import { ExperienceSchema } from "./portfolio/Experience";
import { TechnologySchema } from "./portfolio/Technology";
import { ProjectSchema } from "./portfolio/Project";
const PortfolioSchema = new mongoose.Schema(
        {
                profile: ProfileSchema,
                stats: StatsSchema,

                experiences: [ExperienceSchema],
                technologies: [TechnologySchema],
                projects: [ProjectSchema],
        },
        {
                timestamps: true,
        }
);

const Portfolio = mongoose.models.Portfolio || mongoose.model("Portfolio", PortfolioSchema);

export default Portfolio;