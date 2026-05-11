import type { Metadata } from "next";
import { Jost, Poppins } from "next/font/google";
import "./globals.css";
// Supports weights 200-800
import '@fontsource-variable/bricolage-grotesque/wght.css';

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
});


const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "GAMATHO | Fullstack Web Developer",
    description:
        "Portfolio de GAMATHO, développeur web fullstack spécialisé en Next.js, Laravel, Node.js, MongoDB et applications modernes.",

    keywords: [
        "Fullstack Developer",
        "Next.js",
        "Laravel",
        "Node.js",
        "MongoDB",
        "Portfolio",
        "Web Developer",
    ],

    authors: [{ name: "GAMATHO" }],

    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="fr"
            className={`
                ${jost.variable}
                ${poppins.variable}
                h-full
                antialiased
            `}
        >
            <body className={`${jost.variable} ${poppins.variable}`}>
                {children}
            </body>
        </html>
    );
}