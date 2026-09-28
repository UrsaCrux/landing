"use client";
import Image from "next/image";

const SECTIONS = [
    {
        title: "Navegación",
        links: [
            { label: "Inicio", href: "#inicio" },
            { label: "Nosotros", href: "#nosotros" },
            { label: "Hitos", href: "#hitos" },
            { label: "Equipo", href: "#equipo" },
        ],
    },
    {
        title: "Redes",
        links: [
            { label: "Instagram", href: "https://www.instagram.com/coheteria_ucrux/" },
            { label: "Email", href: "mailto:coheteria.ursacrux@gmail.com" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-white/5 bg-[#02000A]/80 backdrop-blur-xl">
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="mb-4 flex items-center gap-3">
                            <Image
                                src="/logo2.jpg"
                                alt="Club de Cohetería Ursa Crux Logo"
                                width={40}
                                height={40}
                                className="rounded-full border border-white/10"
                            />
                            <span className="text-lg font-bold text-white">Club de Cohetería Ursa Crux</span>
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed text-white">
                            Club de Cohetería Ursa Crux.
                            Construyendo el futuro aeroespacial de Chile, un cohete a la vez.
                        </p>
                    </div>

                    {/* Link sections */}
                    {SECTIONS.map((section) => (
                        <div key={section.title}>
                            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                                {section.title}
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith("http") ? "_blank" : undefined}
                                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="text-sm text-white transition-colors hover:text-accent"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
                    <p className="text-xs text-white">
                        © {new Date().getFullYear()} Club de Cohetería Ursa Crux. Todos los derechos reservados.
                    </p>
                    <p className="text-xs text-white">
                        Club de Cohetería Ursa Crux
                    </p>
                </div>
            </div>
        </footer>
    );
}
