"use client";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#02000A] via-transparent to-[#02000A] z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#02000A]/80 via-transparent to-[#02000A]/80 z-10" />

            {/* Radial glow behind logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(78,53,113,0.35)_0%,transparent_70%)] z-10" />

            {/* Content */}
            <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
                {/* Accessible H1 */}
                <h1 className="sr-only">Club de Cohetería Ursa Crux</h1>

                {/* Logo */}
                <div className="mb-10 sm:mb-12 flex justify-center animate-fade-in">
                    <Image
                        src="/logo_wide.png"
                        alt="Club de Cohetería Ursa Crux Logo"
                        width={1000}
                        height={280}
                        className="h-auto w-[85vw] sm:w-[70vw] md:w-[50vw] max-w-[850px] object-contain drop-shadow-2xl"
                        priority
                    />
                </div>

                {/* Subtitle */}
                <p className="animate-fade-in-up delay-200 mx-auto max-w-2xl text-lg text-white leading-relaxed mb-10 sm:text-xl">
                    Diseñamos, construimos y lanzamos cohetes. Impulsando la ingeniería
                    aeroespacial estudiantil desde la UC.
                </p>

                {/* CTAs */}
                <div className="animate-fade-in-up delay-300 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdN-On0V4bmve3Oc2dh_k56VDuE0CQ3KVzsbILfGCLU6K_XlA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn-glow text-base">
                        Únete al equipo
                    </a>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#02000A] to-transparent z-20" />

            {/* Scroll indicator */}
            {/*<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-fade-in delay-500">
                <div className="flex flex-col items-center gap-2 text-white/30">
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <div className="h-8 w-[1px] bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
                </div>
            </div>*/}
        </section>
    );
}
