"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { COLORS } from "@/constants/color";
import Para from "@/components/utils/Para";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden relative">

            {/* Title */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white"> Connexion <span className="text-[#2845D6]">Admin</span></h1>
                <Para message="Accédez au dashboard administrateur de votre portfolio." />
            </div>

            {/* Form */}
            <form className="w-full mt-10 flex flex-col gap-5">
                <div className="text-white flex flex-col justify-start">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none" placeholder="Entrez votre email ..." />
                </div>
                <div className="text-white flex flex-col justify-start">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" id="password" style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none" placeholder="********" />
                </div>
                <button type="submit" className="transition-transform duration-300 text-sm w-full h-10 rounded-md text-white bg-[#2845D6] cursor-pointer hover:bg-white hover:text-black">Connexion </button>

            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
                <p className="text-white/40 text-sm">
                    Dashboard Portfolio • GAMATHO
                </p>
            </div>

        </div>
    );
}