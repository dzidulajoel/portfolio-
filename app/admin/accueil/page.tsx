'use client';
import Para from '@/components/utils/Para';
import { COLORS } from '@/constants/color';
import { Icon } from '@iconify/react';

const page = () => {
    const sections = [
        "Profil",
        "Statistiques",
        "Expériences",
        "Technologies",
        "Projets",
    ];

    return (
        <div className="min-h-screen w-full text-white flex">

            {/* CONTENT */}
            <main className="flex-1 px-4 lg:p-10 overflow-y-auto">
                {/* TOPBAR */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
                    <div>
                        <h2 className="text-4xl font-bold">
                            Dashboard Admin
                        </h2>
                        <Para message="Gérez votre portfolio développeur." />
                    </div>

                    <button className="w-full lg:w-auto px-6 transition-all duration-300 flex justify-center text-sm items-center h-10 rounded-md text-white bg-[#2845D6] cursor-pointer hover:bg-white hover:text-black">
                        Sauvegarder
                    </button>
                </div>

                {/* PROFILE */}
                <section className="rounded-md mb-8">
                    <h3 className="text-xl lg:text-3xl font-bold mb-8">
                        Profil Utilisateur
                    </h3>

                    <div className="grid lg:grid-cols-2 gap-6">
                        <input
                            placeholder="Nom complet"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <input
                            placeholder="Profession"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <textarea
                            placeholder="Description courte"
                            rows={6} style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <textarea
                            placeholder="Description détaillée"
                            rows={6} style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 mt-6">
                        <input
                            placeholder="LinkedIn"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <input
                            placeholder="GitHub"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <input
                            placeholder="WhatsApp"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <input
                            placeholder="Email"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />
                    </div>
                </section>

                {/* STATS */}
                <section className="rounded-md mb-8">
                    <h3 className="text-xl lg:text-3xl font-bold mb-8">
                        Statistiques
                    </h3>

                    <div className="grid lg:grid-cols-3 gap-6">
                        <input
                            placeholder="Années d’expérience"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <input
                            placeholder="Projets réalisés"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <input
                            placeholder="Clients satisfaits"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section className="rounded-md mb-8">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-2xl font-bold">
                            Expériences
                        </h3>

                        <button className="px-6 w-auto py-2 text-sm rounded-md bg-[#2845D6]/20 border border-[#2845D6]/40 hover:bg-[#2845D6]/30 transition-all">
                            Ajouter
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                        <input
                            placeholder="Titre"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <input
                            placeholder="Entreprise"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <textarea
                            placeholder="Description"
                            rows={6} style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <input
                            type="date"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />
                    </div>
                </section>

                {/* TECHNOLOGIES */}
                <section className="rounded-md mb-8">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-2xl font-bold">
                            Technologies
                        </h3>

                        <button className="px-6 w-auto py-2 text-sm rounded-md bg-[#2845D6]/20 border border-[#2845D6]/40 hover:bg-[#2845D6]/30 transition-all">
                            Ajouter
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                        <input
                            placeholder="Icône"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <input
                            placeholder="Label"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <input
                            placeholder="Couleur"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <select style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none">
                            <option>Frontend</option>
                            <option>Backend</option>
                            <option>Database</option>
                            <option>DevOps</option>
                        </select>
                    </div>
                </section>

                {/* PROJECTS */}
                <section className="rounded-md mb-8">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-2xl font-bold"> Projets</h3>
                        <button className="px-6 w-auto py-2 text-sm rounded-md bg-[#2845D6]/20 border border-[#2845D6]/40 hover:bg-[#2845D6]/30 transition-all">Ajouter Projet</button>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                        <input placeholder="Nom du projet" style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none" />

                        <select style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none">
                            <option>Frontend</option>
                            <option>Backend</option>
                            <option>Fullstack</option>
                        </select>

                        <textarea placeholder="Description courte"
                            rows={6} style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <textarea placeholder="Description complète"
                            rows={6} style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <input placeholder="Lien GitHub"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <input placeholder="Lien du projet"
                            style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <textarea placeholder="Fonctionnalités principales"
                            rows={6} style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <textarea placeholder="Challenges techniques"
                            rows={6} style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />

                        <textarea
                            placeholder="Ce que j’ai appris"
                            rows={6} style={{ backgroundColor: COLORS.black[800] }} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none"
                        />


                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 mt-6">

                        <label style={{ backgroundColor: COLORS.black[800] }} className=" relative h-56 rounded-md backdrop-blur-md flex flex-col justify-center items-center cursor-pointer overflow-hidden group transition-all hover:border-[#2845D6]/40">
                            <input type="file" accept="image/*" className="hidden" />

                            <div className="w-16 h-16 rounded-2xl bg-[#2845D6]/15 flex justify-center items-center group-hover:scale-110 transition-all">
                                <Icon icon="solar:gallery-add-bold" width="34" height="34" color="#2845D6" />
                            </div>

                            <h3 className="mt-5 text-white font-semibold"> Ajouter Image 1</h3>
                            <p className="text-white/40 text-sm mt-1"> PNG, JPG ou WEBP </p>
                        </label>

                        {/* IMAGE 2 */}
                        <label style={{ backgroundColor: COLORS.black[800] }} className=" relative h-56 rounded-md backdrop-blur-md flex flex-col justify-center items-center cursor-pointer overflow-hidden group transition-all hover:border-[#2845D6]/40 ">
                            <input type="file" accept="image/*" className="hidden" />

                            <div className="w-16 h-16 rounded-2xl bg-[#2845D6]/15 flex justify-center items-center group-hover:scale-110 transition-all">
                                <Icon icon="solar:gallery-add-bold" width="34" height="34" color="#2845D6" />
                            </div>
                            <h3 className="mt-5 text-white font-semibold">Ajouter Image 2</h3>

                            <p className="text-white/40 text-sm mt-1"> PNG, JPG ou WEBP</p>
                        </label>

                        {/* VIDEO */}
                        <label style={{ backgroundColor: COLORS.black[800] }} className=" relative h-56 rounded-md backdrop-blur-md flex flex-col justify-center items-center cursor-pointer overflow-hidden group transition-all hover:border-[#2845D6]/40">
                            <input type="file" accept="video/*" className="hidden" />

                            <div className="w-16 h-16 rounded-2xl bg-[#2845D6]/15 flex justify-center items-center group-hover:scale-110 transition-all">
                                <Icon icon="solar:video-frame-play-horizontal-bold" width="34" height="34" color="#2845D6" />
                            </div>
                            <h3 className="mt-5 text-white font-semibold"> Ajouter Vidéo</h3>

                            <p className="text-white/40 text-sm mt-1">MP4, WEBM ou MOV </p>
                        </label>

                    </div>

                </section>

                {/* PREVIEW */}
                <section className="rounded-md">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-2xl font-bold">
                            Preview CRUD
                        </h3>

                        <button className="w-auto px-6 transition-all duration-300 flex justify-center text-sm items-center h-10 rounded-md text-white bg-[#2845D6] cursor-pointer hover:bg-white hover:text-black">
                            Voir Portfolio
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="rounded-md  overflow-hidden"
                                style={{ backgroundColor: COLORS.black[800] }}
                            >
                                <div className="h-52 bg-linear-to-br from-[#2845D6]/30 to-black" />

                                <div className="p-5">
                                    <h4 className="text-xl font-bold">
                                        XAFINO
                                    </h4>

                                    <p className="text-white/50 mt-3 text-sm leading-7">
                                        Plateforme moderne de gestion financière.
                                    </p>

                                    <div className="flex gap-3 mt-6">
                                        <button className="flex-1 text-sm p-2 rounded-md bg-[#2845D6]/20 border border-[#2845D6]/30 hover:bg-[#2845D6]/30 transition-all">
                                            Modifier
                                        </button>

                                        <button className="flex-1 text-sm p-2 rounded-md bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-all text-red-400">
                                            Supprimer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
}


export default page