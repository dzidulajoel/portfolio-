'use client';
import Contact from "@/components/Contact";
import Navbar from "@/components/utils/Navbar";
import { COLORS } from "@/constants/color";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Layout = ({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) => {
        return (
                <div className="w-full min-h-screen py-6 flex flex-col items-center space-y-16 relative justify-end" style={{ backgroundColor: COLORS.black[900] }}>

                        <header className="flex justify-end lg:justify-center items-center gap-4 sticky top-4 z-50">
                                <Navbar />
                        </header>
                        <main className='w-full px-8 lg:px-30 h-full lg:flex justify-center items-start gap-20 relative'>
                                <div className="w-full lg:w-2/6 h-fit lg:px-4 bg-white rounded-lg flex flex-col justify-center items-center py-8 gap-6 lg:sticky top-6">
                                        <div className="w-70 lg:w-[90%] h-60 rounded-lg bg-[#2845D6]"></div>
                                        <div>
                                                <h1 className="text-3xl text-center font-bold">Gamatho Dzidula</h1>
                                                <div className="pt-10 space-y-10 w-full">
                                                        <p className="profil text-center text-gray-500">Je transforme vos idées et projets numériques en solutions modernes, performantes et concrètes.</p>
                                                        <ul className="flex justify-center items-center gap-6">
                                                                <li className="w-10 h-10 rounded-md flex justify-center items-center bg-[#2845D6]/10"><a href="#"><Icon color="#2845D6" icon="formkit:linkedin" width="28" height="28" /></a></li>
                                                                <li className="w-10 h-10 rounded-md flex justify-center items-center bg-[#2845D6]/10"><a href="#"><Icon color="#2845D6" icon="charm:github" width="24" height="24" /></a></li>
                                                                <li className="w-10 h-10 rounded-md flex justify-center items-center bg-[#2845D6]/10"><a href="#"><Icon color="#2845D6" icon="majesticons:mail-line" width="28" height="28" /></a></li>
                                                                <li className="w-10 h-10 rounded-md flex justify-center items-center bg-[#2845D6]/10"><a href="#"><Icon color="#2845D6" icon="mingcute:whatsapp-line" width="26" height="26" /></a></li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                                <div className='w-full lg:w-4/6 h-full  rounded-full no-scrollbar'>
                                        {children}
                                        <div className="mt-8">
                                                <Contact />
                                        </div>
                                </div>
                        </main>
                        <footer className="w-full flex justify-center items-center py-8">
                                <p className="text-white ">&copy; Made by <Link href="" className="text-[#2845D6]">DzidulaSolutions | Portfolio 2026</Link> </p>
                        </footer>
                </div>
        );
};

export default Layout;