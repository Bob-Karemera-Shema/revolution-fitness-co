"use client"
import { navigationLinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="flex justify-between gap-4 h-20 border-b border-divider-gray relative">
            <div className="h-full border-r border-divider-gray">
                <Link href="/" aria-label="Home">
                    <Image src="/images/pri-logo-rect-trans.png" alt="Revolution Fitness Logo" width={8000} height={4500} className="w-auto h-full object-contain" />
                </Link>
            </div>

            <ul className="hidden xl:flex">
                {
                    navigationLinks.map((link, index) => (
                        <li key={link.href + link.label} className={`px-6 border-l border-divider-gray flex items-center justify-center ${index < navigationLinks.length - 1 ? "border-r" : ""}`}>
                            <Link href={link.href} aria-label={link.label} className="uppercase hover:text-brand-green text-xs">
                                {link.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <ul className={`w-full h-screen bg-background absolute top-0 z-9 pt-25 flex flex-col items-center gap-10 transition-all duration-300 xl:hidden ${isOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"}`}>
                {
                    navigationLinks.map((link) => (
                        <li key={link.href + link.label} className={`flex items-center justify-center`}>
                            <Link href={link.href} aria-label={link.label} className="uppercase text-3xl font-medium">
                                {link.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <button className="px-6 flex items-center cursor-pointer xl:hidden border-l border-divider-gray" onClick={toggleMenu} aria-label="Toggle Menu">
                <div className="w-10 h-7 z-10 flex flex-col items-center justify-between">
                    {
                        new Array(3).fill(0).map((_, index) => (
                            <div
                                key={'Menu Bar' + index}
                                className={`w-full h-1 bg-foreground rounded transition-all duration-300 ${isOpen ? (index === 0 ? "rotate-45 translate-y-3" : index === 1 ? "opacity-0" : "-rotate-45 -translate-y-3") : ""}`}
                            />
                        ))
                    }
                </div>
            </button>
        </nav>
    );
};
