"use client";

const PROJECTS = [
    {
        name: "Chépica I",
        category: "Nivel 1 · HPR",
        description:
            "Nuestro primer cohete de alta potencia. Alcanzó los 800 metros de apogeo en su vuelo inaugural, marcando el inicio del club.",
        specs: ["Motor: I-class", "Apogeo: 800m", "Masa: 3.2 kg"],
        status: "Completado",
        statusColor: "bg-green-500",
    },
    {
        name: "Chépica II",
        category: "Nivel 2 · HPR",
        description:
            "Segunda iteración con diseño aerodinámico mejorado y aviónica propia para registro de datos de vuelo en tiempo real.",
        specs: ["Motor: J-class", "Apogeo: 1,500m", "Aviónica: propia"],
        status: "Completado",
        statusColor: "bg-green-500",
    },
    {
        name: "Ranco",
        category: "SRAD · Experimental",
        description:
            "Proyecto de motor sólido de diseño y fabricación propia (SRAD). Un desafío de propulsión que exige dominio de química y termodinámica.",
        specs: ["Motor: SRAD sólido", "Empuje: 500N", "Duración: 2.5s"],
        status: "En desarrollo",
        statusColor: "bg-accent",
    },
    {
        name: "Llanquihue",
        category: "Competencia · SAC",
        description:
            "Cohete diseñado para la Spaceport America Cup. Nuestro vehículo más ambicioso, con meta de superar los 3,000 metros.",
        specs: ["Motor: L-class", "Apogeo: 3,048m", "Payload: científico"],
        status: "En desarrollo",
        statusColor: "bg-accent",
    },
];

export default function Projects() {
    return (
        <section id="proyectos" className="relative z-10 py-28 sm:py-36">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="accent-line mx-auto mb-5" />
                    <h2 className="section-title mb-4">
                        Nuestros{" "}
                        <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                            Proyectos
                        </span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Desde cohetes de nivel 1 hasta motores de fabricación propia. Cada proyecto
                        nos acerca más a las estrellas.
                    </p>
                </div>

                {/* Project cards */}
                <div className="grid gap-6 sm:grid-cols-2">
                    {PROJECTS.map((p, i) => (
                        <div key={p.name} className="glass-card group overflow-hidden">
                            {/* Top gradient bar */}
                            <div className="h-1 bg-gradient-to-r from-accent to-accent-light opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="p-8">
                                {/* Header row */}
                                <div className="mb-4 flex items-start justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold">{p.name}</h3>
                                        <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                                            {p.category}
                                        </span>
                                    </div>
                                    <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium">
                                        <span className={`inline-block h-2 w-2 rounded-full ${p.statusColor}`} />
                                        {p.status}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="mb-6 text-sm leading-relaxed text-text-muted">
                                    {p.description}
                                </p>

                                {/* Specs */}
                                <div className="flex flex-wrap gap-2">
                                    {p.specs.map((spec) => (
                                        <span
                                            key={spec}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                                        >
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
