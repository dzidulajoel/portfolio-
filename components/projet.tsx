import Image from "next/image";
import Title from "./utils/Title"

const Projet = () => {
        const projets = [
                {
                        label: "Xafino",
                        bg: "from-[#2845D6] via-[#2845D6]/40 to-transparent",
                        image: "/images/projet-001.webp",
                },

                {
                        label: "SkillGuard",
                        bg: "from-red-900/80 via-red-500/50 to-transparent",
                        image: "/images/projet-001.webp",
                },

                {
                        label: "Nufiala",
                        bg: "from-emerald-900/80 via-emerald-900/50 to-transparent",
                        image: "/images/projet-001.webp",
                },
                {
                        label: "Xafino",
                        bg: "from-[#2845D6] via-[#2845D6]/40 to-transparent",
                        image: "/images/projet-001.webp",
                },

                {
                        label: "SkillGuard",
                        bg: "from-red-900/80 via-red-500/50 to-transparent",
                        image: "/images/projet-001.webp",
                },

                {
                        label: "Nufiala",
                        bg: "from-emerald-900/80 via-emerald-900/50 to-transparent",
                        image: "/images/projet-001.webp",
                },
        ];


        return (
                <>
                        <Title title1="PROJETS" title2="RECENTS" />
                        <div className="mt-4 flex justify-start items gap-4">
                                <div className="flex gap-6">
                                        {projets.map((item, index) => (
                                                <div key={index} className="group relative w-16 h-105 overflow-hidden rounded-tl-full rounded-tr-full bg-white/10 backdrop-blur-md cursor-pointer transition-all duration-500">
                                                        <Image fill src={item.image} alt={item.label} className=" object-cover opacity-40 group-hover:opacity-70 transition-all duration-500" />

                                                        <div className={` absolute inset-0 bg-linear-to-b ${item.bg}`} />
                                                        <div className=" absolute top-8 left-1/2 -translate-x-1/2 z-10 ">
                                                                <h5 className=" text-white text-sm  font-semibold [writing-mode:vertical-rl] rotate-180">
                                                                        {item.label}
                                                                </h5>
                                                        </div>
                                                        <div className=" absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/5" />
                                                </div>
                                        ))}
                                </div>
                        </div>
                </>
        )
}

export default Projet