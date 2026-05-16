"use client";
import Counter from "@/components/utils/Counter";
import Experience from "@/components/Experience";
import Projet from "@/components/projets";
import Title from "@/components/utils/Title";
import Outils from "@/components/Outils";
import Para from "@/components/utils/Para";

const page = () => {
        const stats = [
                { label: "Années d’expérience", number: 2 },
                { label: "Projets  réalisés", number: 15 },
                { label: "Clients satisfaits", number: 5 },
        ];
        return (
                <>
                        <section className="space-y-20" >

                                <div className="mt-8 lg:mt-0">
                                        <div className="space-y-4">
                                                <Title title1="DEVELOPPEUR" title2="FULLSTACK" />
                                                <Para message="Développeur fullstack, je conçois et développe des applications web modernes, performantes et centrées utilisateur. J’aide à transformer vos idées en solutions digitales concrètes, fiables et évolutives." />

                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
                                                {stats.map((item, index) => (
                                                        <div key={index} className="backdrop-blur-md text-start">
                                                                <h3 className="text-[3rem] font-bold text-white"><Counter value={item.number} /></h3>
                                                                <p className="text-md mt-2 text-white/70  uppercase"> {item.label}</p>
                                                        </div>
                                                ))}
                                        </div>

                                </div>
                                <Projet />
                                <Experience />
                                <Outils />
                                
                        </section>
                </>
        )
}

export default page

