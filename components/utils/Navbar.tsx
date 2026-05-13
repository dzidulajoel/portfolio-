"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Navbar = () => {
        const pathname = usePathname();

        const navItems = [
                {
                        label: "Accueil",
                        href: "/portfolio",
                        icon: "majesticons:home-line",
                        size: 30,
                },

                {
                        label: "Projets",
                        href: "/portfolio/projets",
                        icon: "majesticons:folder-line",
                        size: 26,
                },

                {
                        label: "Experiences",
                        href: "/portfolio/experience",
                        icon: "mdi:briefcase-outline",
                        size: 28,
                },

                {
                        label: "Outils",
                        href: "/portfolio/outils",
                        icon: "ri:tools-fill",
                        size: 28,
                },

                {
                        label: "Contact",
                        href: "/portfolio/contact",
                        icon: "majesticons:mail-line",
                        size: 30,
                },
        ];

        return (
                <nav className="w-full h-full">
                        <ul className="flex justify-center items-center h-full gap-8 px-8">
                                {navItems.map((item) => {
                                        const isActive = pathname === item.href;

                                        return (
                                                <li key={item.label} className="relative group">
                                                        <Link href={item.href}>
                                                                <motion.div whileHover={{ scale: 1.15,}}  whileTap={{ scale: 0.95,}}  className="relative flex items-center justify-center cursor-pointer py-2">
                                                                        <Icon icon={item.icon} width={item.size} height={item.size} className={` transition-all duration-300  ${isActive  ? "text-[#2845D6]"  : "text-white hover:text-[#2845D6]" }`} />
                                                                </motion.div>
                                                        </Link>

                                                        {/* Tooltip */}
                                                        <div className=" absolute left-1/2 -translate-x-1/2 top-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none " >
                                                                <div className=" bg-[#111] text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                                                                        {item.label}
                                                                </div>
                                                        </div>
                                                </li>
                                        );
                                })}
                        </ul>
                </nav>
        );
};

export default Navbar;