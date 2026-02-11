"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const SLIDES = [
    {
        src: "/club-1.png",
        alt: "El equipo trabajando en el taller",
        caption: "Trabajando juntos en el taller 🔧",
    },
];

export default function Gallery() {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    }, []);

    const goTo = useCallback((index) => {
        setCurrent(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    }, []);

    // Auto-advance
    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, next]);

    return (
        <section id="galeria" className="relative z-10 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-6">
                {/* Header */}
                <div className="mb-12 text-center">
                    <div className="accent-line mx-auto mb-5" />
                    <h2 className="section-title mb-4">
                        El Club en{" "}
                        <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                            Acción
                        </span>
                    </h2>
                    {/*<p className="section-subtitle mx-auto">
                        Momentos que nos definen — del taller al campo de lanzamiento.
                    </p>*/}
                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden rounded-2xl glass-card">
                    {/* Slides container */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {SLIDES.map((slide, i) => (
                            <div
                                key={i}
                                className="relative w-full flex-shrink-0 aspect-[16/9] flex items-center justify-center"
                                style={{
                                    background: `linear-gradient(135deg, 
                                        hsl(${210 + i * 25}, 40%, 12%) 0%, 
                                        hsl(${220 + i * 20}, 35%, 18%) 50%,
                                        hsl(${200 + i * 30}, 45%, 10%) 100%)`,
                                }}
                            >
                                {/* Placeholder content */}
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 90vw, 1024px"
                                    priority={i === 0}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Caption overlay */}
                    {/*<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 py-6">
                        <p className="text-lg font-semibold text-white">
                            {SLIDES[current].caption}
                        </p>
                    </div>*/}

                    {/* Prev / Next buttons */}
                    <button
                        onClick={() => { prev(); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 8000); }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white/80 backdrop-blur-sm transition-all hover:bg-black/70 hover:text-white hover:scale-110"
                        aria-label="Anterior"
                    >
                        ‹
                    </button>
                    <button
                        onClick={() => { next(); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 8000); }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white/80 backdrop-blur-sm transition-all hover:bg-black/70 hover:text-white hover:scale-110"
                        aria-label="Siguiente"
                    >
                        ›
                    </button>
                </div>

                {/* Dots */}
                <div className="mt-6 flex justify-center gap-2">
                    {SLIDES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === current
                                ? "w-8 bg-accent"
                                : "w-2 bg-white/20 hover:bg-white/40"
                                }`}
                            aria-label={`Ir a imagen ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
