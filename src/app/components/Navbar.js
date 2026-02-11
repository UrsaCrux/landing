"use client";
import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Galería", href: "#galeria" },
    { label: "Equipo", href: "#equipo" },

];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a href="#inicio" className="flex items-center gap-3 group">
                    <Image
                        src="/logo1.jpeg"
                        alt="CCUC Logo"
                        width={44}
                        height={44}
                        className="rounded-full border border-white/10 transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_16px_rgba(26,107,170,0.4)]"
                    />
                    <span className="text-lg font-bold tracking-wide">CCUC</span>
                </a>

                {/* Desktop links */}
                <ul className="hidden items-center gap-1 md:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="relative rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:text-white hover:bg-white/5"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="ml-4">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdN-On0V4bmve3Oc2dh_k56VDuE0CQ3KVzsbILfGCLU6K_XlA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn-glow text-sm !py-2.5 !px-5">
                            Únete
                        </a>
                    </li>
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="flex flex-col gap-1.5 md:hidden p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <span
                        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col gap-2 bg-black px-6 pb-6">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-white/70 transition-all hover:text-white hover:bg-white/5"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdN-On0V4bmve3Oc2dh_k56VDuE0CQ3KVzsbILfGCLU6K_XlA/viewform?usp=dialog"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="btn-glow mt-2 text-center text-sm"
                    >
                        Únete
                    </a>
                </div>
            </div>
        </nav>
    );
}
