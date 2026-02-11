"use client";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14] via-transparent to-[#0a0a14] z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14]/80 via-transparent to-[#0a0a14]/80 z-10" />

            {/* Radial glow behind logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(26,107,170,0.08)_0%,transparent_70%)] z-10" />

            {/* Content */}
            <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
                {/* Logo */}
                <div className="mb-8 flex justify-center animate-fade-in">
                    <div className="relative">
                        <Image
                            src="/logo1.jpeg"
                            alt="CCUC Logo"
                            width={160}
                            height={160}
                            className="rounded-full border-2 border-white/10 shadow-2xl animate-float"
                            priority
                        />
                        <div className="absolute inset-0 rounded-full border border-accent/20 animate-[pulseGlow_3s_ease-in-out_infinite]" />
                    </div>
                </div>

                {/* Badge */}
                {/*<div className="animate-fade-in-up delay-100">
                    <span className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6">
                        Pontificia Universidad Católica de Chile
                    </span>
                </div>*/}

                {/* Title */}
                <h1 className="animate-fade-in-up delay-200 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1] mb-6">
                    Club de{" "}
                    <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                        Cohetería
                    </span>{" "}
                    UC
                </h1>

                {/* Subtitle */}
                <p className="animate-fade-in-up delay-300 mx-auto max-w-2xl text-lg text-text-muted leading-relaxed mb-10 sm:text-xl">
                    Diseñamos, construimos y lanzamos cohetes. Impulsando la ingeniería
                    aeroespacial estudiantil desde la UC.
                </p>

                {/* CTAs */}
                <div className="animate-fade-in-up delay-400 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <a href="#proyectos" className="btn-glow text-base">
                        🚀 Ver Proyectos
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdN-On0V4bmve3Oc2dh_k56VDuE0CQ3KVzsbILfGCLU6K_XlA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn-outline text-base">
                        Únete al equipo
                    </a>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a14] to-transparent z-20" />

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
