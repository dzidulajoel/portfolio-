import Para from "@/components/utils/Para";
import { COLORS } from "@/constants/color";
import { projets } from "@/constants/projet";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
        params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
        const { slug } = await params;

        // Recherche du projet par slug
        const projet = projets.find((item) => item.slug === slug);

        // Si le projet n'existe pas, afficher 404
        if (!projet) {
                notFound();
        }

        // Récupération des autres projets pour la section "Autres projets"
        const autresProjets = projets.filter((item) => item.slug !== projet.slug).slice(0, 3);

        return (
                <div className="w-full mt-4 lg:mt-0 min-h-screen text-white flex flex-col gap-20">

                        {/* HERO SECTION */}
                        <section className="w-full">
                                <div className="space-y-8">

                                        {/* IMAGE DROITE */}
                                        <div className="relative w-full h-100 lg:h-125 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                                <Image
                                                        fill
                                                        src={projet.image}
                                                        alt={projet.title}
                                                        className="object-cover"
                                                        priority
                                                />
                                                <div className="h-125 w-full absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                                        </div>

                                        {/* CONTENU GAUCHE */}
                                        <div className="space-y-4">
                                                <span className="text-blue-400 bg-[#2845D6]/30 p-1 rounded-md font-medium text-sm uppercase tracking-wider">
                                                        Projet Fullstack
                                                </span>

                                                <h1 className="text-3xl lg:text-5xl py-4 font-bold leading-tight">
                                                        {projet.title}
                                                </h1>

                                                <Para message={projet.description} />

                                                {/* BOUTONS D'ACTION */}
                                                <div className="flex flex-wrap gap-4 pt-4">
                                                        {projet.liveUrl && (
                                                                <Link href={projet.liveUrl} target="_blank" rel="noopener noreferrer" className="w-1/3 transition-all duration-300 flex justify-center text-sm items-center h-10 rounded-md text-white bg-[#2845D6] cursor-pointer hover:bg-white hover:text-black" >
                                                                        Visiter le projet
                                                                </Link>
                                                        )}

                                                        {projet.githubUrl && (
                                                                <Link href={projet.githubUrl} target="_blank" rel="noopener noreferrer"
                                                                        className="w-1/3 flex justify-center items-center h-10 rounded-md text-white border transition-all duration-300 border-white/50 text-sm cursor-pointer hover:bg-white hover:text-black"
                                                                >
                                                                        Voir sur Github
                                                                </Link>
                                                        )}
                                                </div>
                                        </div>

                                </div>
                        </section>

                        {/* TECHNOLOGIES UTILISÉES */}
                        <section className="">
                                <div className="w-full">
                                        <h2 className="text-xl lg:text-3xl font-bold mb-8">
                                                Technologies utilisées
                                        </h2>

                                        <div className="flex flex-wrap gap-3">
                                                {projet.technologies.map((tech, index) => (
                                                        <span key={index}  className="text-sm font-light px-6 py-1 rounded-md bg-[#2845D6]/30 border border-[#2845D6]/50 text-white/90 hover:bg-white/10 transition-all duration-300">
                                                                {tech}
                                                        </span>
                                                ))}
                                        </div>
                                </div>
                        </section>

                        {/* DESCRIPTION DÉTAILLÉE */}
                        {projet.detailedDescription && (
                                <section className="">
                                        <div className="w-full">
                                                <h2 className="text-xl lg:text-3xl font-bold mb-8">
                                                        À propos du projet
                                                </h2>

                                                <div className="prose prose-invert max-w-none">
                                                        <Para message={projet.detailedDescription} />
                                                </div>
                                        </div>
                                </section>
                        )}

                        {/* FONCTIONNALITÉS PRINCIPALES */}
                        <section className="">
                                <div className="">
                                        <h2 className="text-xl lg:text-3xl font-bold mb-8">
                                                Fonctionnalités principales
                                        </h2>

                                        <div className="flex flex-col gap-4">
                                                {projet.features.map((feature, index) => (
                                                        <div key={index} style={{backgroundColor:COLORS.black[800]}} className="group p-2 rounded-md  border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                                                <div className="flex items-start gap-4">
                                                                        <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                                                                                <span className="text-blue-400 font-bold text-sm">
                                                                                        {index + 1}
                                                                                </span>
                                                                        </div>
                                                                        <Para message={feature}/>
                                                                </div>
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        </section>

                        {/* CHALLENGES TECHNIQUES */}
                        <section className="">
                                <div className="">
                                        <h2 className="text-xl lg:text-3xl font-bold mb-8">
                                                Challenges techniques
                                        </h2>

                                        <div className="space-y-4">
                                                {projet.challenges.map((challenge, index) => (
                                                        <div key={index}className="group p-2 rounded-md  border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300" style={{backgroundColor:COLORS.black[800]}}>
                                                                <div className="flex items-start gap-4">
                                                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                                                                        <Para message={challenge}/>
                                                                </div>
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        </section>

                        {/* GALERIE SCREENSHOTS (optionnel) */}
                        {projet.screenshots && projet.screenshots.length > 0 && (
                                <section className="">
                                        <div className="w-full">
                                                <h2 className="text-xl lg:text-3xl font-bold mb-8">  Aperçu du projet</h2>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                        {projet.screenshots.map((screenshot, index) => (
                                                                <div key={index} className="relative h-75 rounded-2xl overflow-hidden border border-white/10 group">
                                                                        <Image
                                                                                fill
                                                                                src={screenshot}
                                                                                alt={`${projet.title} screenshot ${index + 1}`}
                                                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                                        />
                                                                </div>
                                                        ))}
                                                </div>
                                        </div>
                                </section>
                        )}

                        {/* INFORMATIONS COMPLÉMENTAIRES */}
                        <section className="">
                                <div className="w-full">
                                        <h2 className="text-xl lg:text-3xl font-bold mb-8"> Informations du projet</h2>

                                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">

                                                {projet.duration && (
                                                        <div className="p-2 rounded-md bg-white/5 border border-white/10">
                                                                <span className="text-blue-400 bg-[#2845D6]/30 p-1 rounded-md font-light text-xs tracking-wider">Durée</span>
                                                                <p className="text-white font-light py-1 text-sm">
                                                                        {projet.duration}
                                                                </p>
                                                        </div>
                                                )}

                                                {projet.type && (
                                                        <div className="p-2 rounded-md bg-white/5 border border-white/10">
                                                                <span className="text-blue-400 bg-[#2845D6]/30 p-1 rounded-md font-light text-xs tracking-wider">Type</span>
                                                                <p className="text-white font-light py-1 text-sm">
                                                                        {projet.type}
                                                                </p>
                                                        </div>
                                                )}

                                                {projet.client && (
                                                        <div className="p-2 rounded-md bg-white/5 border border-white/10">
                                                                <span className="text-blue-400 bg-[#2845D6]/30 p-1 rounded-md font-light text-xs tracking-wider">Client</span>
                                                                <p className="text-white font-light py-1 text-sm">
                                                                        {projet.client}
                                                                </p>
                                                        </div>
                                                )}

                                                {projet.status && (
                                                        <div className="p-2 rounded-md bg-white/5 border border-white/10">
                                                                <span className="text-blue-400 bg-[#2845D6]/30 p-1 rounded-md font-light text-xs tracking-wider">Statut</span>
                                                                <p className="text-white font-light py-1 text-sm">
                                                                        {projet.status}
                                                                </p>
                                                        </div>
                                                )}

                                        </div>
                                </div>
                        </section>

                        {/* CE QUE J'AI APPRIS */}
                        {projet.learnings && (
                                <section className="">
                                        <div className="">
                                                <h2 className="text-xl lg:text-3xl font-bold mb-8">
                                                        Ce que j'ai appris
                                                </h2>

                                                <div className="rounded-2xl">
                                                        <Para message={projet.learnings}/>
                                                </div>
                                        </div>
                                </section>
                        )}

                        {/* AUTRES PROJETS */}
                        {autresProjets.length > 0 && (
                                <section className="">
                                        <div className="">
                                                <div className="flex justify-between items-start mb-12">
                                                        <h2 className="text-xl lg:text-3xl font-bold mb-8">
                                                                Autres projets
                                                        </h2>

                                                        <Link href="/portfolio/projets" className="text-sm font-light px-6 py-1 rounded-md bg-[#2845D6]/30 border border-[#2845D6]/50 text-white/90 hover:bg-white/10 transition-all duration-300">
                                                                Voir tout →
                                                        </Link>
                                                </div>

                                                
                                        </div>
                                </section>
                        )}

                        {/* BOUTON RETOUR */}
                        <section className="">
                                <div className="">
                                        <Link href="/portfolio/projets" className="w-auto text-sm flex justify-center items-center h-10 rounded-md text-white bg-[#2845D6] cursor-pointer hover:bg-white transition-all duration-300 hover:text-black">
                                                ←  Retour aux projets
                                        </Link>
                                </div>
                        </section>
                </div>
        );
};

export default Page;