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
                        <header className="bg-white/10 rounded-full"> <Navbar /></header>
                        <main className='w-full px-30 h-full flex justify-center items-start gap-20 relative'>
                                <div className="w-2/6 h-fit px-4 bg-white rounded-2xl flex flex-col justify-center items-center py-8 gap-6 sticky top-6">
                                        <div className="w-[90%] h-60 rounded-2xl bg-black"></div>
                                        <div>
                                                <h1 className="text-3xl text-center font-bold">Gamatho Dzidula</h1>
                                                <div className="pt-10 space-y-10 w-full">
                                                        <p className="text-center text-gray-500 font-medium w-full">Je transforme vos idées et projets numériques en solutions modernes, performantes et concrètes.</p>
                                                        <ul className="flex justify-center items-center gap-6">
                                                                <li className="w-10 h-10 rounded-md flex justify-center items-center p-2 bg-[#222222]"><Icon color="#FFF" icon="formkit:linkedin" width="28" height="28" /></li>
                                                                <li className="w-10 h-10 rounded-md flex justify-center items-center p-2 bg-[#222222]"><Icon color="#FFF" icon="charm:github" width="28" height="28" /></li>
                                                                <li className="w-10 h-10 rounded-md flex justify-center items-center p-2 bg-[#222222]"><Icon color="#FFF" icon="majesticons:mail-line" width="28" height="28" /></li>
                                                                <li className="w-10 h-10 rounded-md flex justify-center items-center p-2 bg-[#222222]"><Icon color="#FFF" icon="mingcute:whatsapp-line" width="28" height="28" /></li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                                <div className='w-4/6 h-full px-4 rounded-full no-scrollbar'> {children} </div>
                        </main>
                        <footer className="w-full flex justify-center items-center py-8">
                                <p className="text-white text-sm">&copy; Made by <Link href="" className="text-[#2845D6]">DzidulaSolutions | Portfolio 2026</Link> </p>
                        </footer>
                </div>
        );
};

export default Layout;