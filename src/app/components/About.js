"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
    { label: "Años activos", value: 5, suffix: "+" },
    { label: "Cohetes lanzados", value: 12, suffix: "" },
    { label: "Miembros", value: 40, suffix: "+" },
    { label: "Competencias", value: 6, suffix: "" },
];

const PILLARS = [
    {
        icon: "🎯",
        title: "Misión",
        text: "Fomentar el desarrollo de la cohetería y la ingeniería aeroespacial en Chile, formando ingenieros capaces de diseñar, construir y lanzar cohetes de alta potencia.",
    },
    {
        icon: "🔭",
        title: "Visión",
        text: "Ser referentes en cohetería estudiantil en Latinoamérica, participando en competencias internacionales y contribuyendo al desarrollo aeroespacial nacional.",
    },
    {
        icon: "⚙️",
        title: "Valores",
        text: "Innovación, trabajo en equipo, excelencia técnica y pasión por la exploración. Creemos en aprender haciendo y en superar los límites de lo posible.",
    },
];

function Counter({ value, suffix }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const duration = 1800;
                    const step = (ts) => {
                        if (!start) start = ts;
                        const progress = Math.min((ts - start) / duration, 1);
                        const ease = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(ease * value));
                        if (progress < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return (
        <span ref={ref} className="text-4xl font-extrabold text-accent sm:text-5xl">
            {count}
            {suffix}
        </span>
    );
}

export default function About() {
    return (
        <section id="nosotros" className="relative z-10 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="accent-line mx-auto mb-5" />
                    <h2 className="section-title mb-4">
                        Sobre{" "}
                        <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                            Nosotros
                        </span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Somos el Club de Cohetería Ursa Crux.
                        Un equipo multidisciplinario de estudiantes apasionados por la exploración
                        aeroespacial.
                    </p>
                </div>

                {/* Pillars */}
                <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PILLARS.map((p, i) => (
                        <div
                            key={p.title}
                            className="glass-card p-8"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <span className="mb-4 block text-4xl">{p.icon}</span>
                            <h3 className="mb-3 text-xl font-bold">{p.title}</h3>
                            <p className="text-sm leading-relaxed text-text-muted">{p.text}</p>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                {/*<div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                    {STATS.map((s) => (
                        <div key={s.label} className="glass-card flex flex-col items-center p-8 text-center">
                            <Counter value={s.value} suffix={s.suffix} />
                            <span className="mt-2 text-sm font-medium text-text-muted">{s.label}</span>
                        </div>
                    ))}
                </div>*/}
            </div>
        </section>
    );
}
