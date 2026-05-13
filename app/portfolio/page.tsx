"use client";
import Counter from "@/components/utils/Counter";
import Experience from "@/components/Experience";
import Projet from "@/components/projet";
import Title from "@/components/utils/Title";
import Outils from "@/components/Outils";
import Contact from "@/components/Contact";

const page = () => {
        const stats = [
                { label: "Années d’expérience", number: 2 },
                { label: "Projets  réalisés", number: 15 },
                { label: "Clients satisfaits", number: 5 },
        ];
        return (
                <>
                <section className="space-y-20" >
                        
                        <div >

                                <div className="space-y-4">
                                        <Title title1="DEVELOPPEUR" title2="FULLSTACK" />
                                        <p className="text-start text-white/70 font-medium" >Développeur fullstack, je conçois et développe des applications web modernes, performantes et centrées utilisateur. J’aide à transformer vos idées en solutions digitales concrètes, fiables et évolutives.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                        {stats.map((item, index) => (
                                                <div key={index} className=" p-6 rounded-2x backdrop-blur-md text-center">
                                                        <h3 className="text-xl text-justify font-bold text-white"><Counter value={item.number} /></h3>
                                                        <p className="text-md text-justify mt-2 text-white/70 font-medium uppercase"> {item.label}</p>
                                                </div>
                                        ))}
                                </div>

                        </div>

                        <div>
                                <Projet />
                        </div>

                        <div>
                                <Experience />
                        </div>

                        <div>
                                <Outils />
                        </div>

                        <div>
                                <Contact />
                        </div>


                </section>
                </>
        )
}

export default page

