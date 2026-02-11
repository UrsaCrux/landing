"use client";

const TEAMS = [
    {
        name: "Propulsión",
        color: "propulsion",
        icon: "🔥",
        description:
            "Los que hacen que todo vuele — motores, propelentes y mucha llama. Si te gusta la termodinámica y las pruebas estáticas, este es tu lugar.",
    },
    {
        name: "Diseño",
        color: "diseno",
        icon: "✏️",
        description:
            "Creatividad + ingeniería: dan forma a los cohetes desde el CAD hasta la realidad. Estructuras, aerodinámica y manufactura.",
    },
    {
        name: "Sistemas",
        color: "sistemas",
        icon: "⚙️",
        description:
            "Electrónica, sensores y ese código que hace que todo funcione en el aire. Aviónica, telemetría y software de vuelo.",
    },
    {
        name: "Relaciones y Enlace",
        color: "enlace",
        icon: "🤝",
        description:
            "El puente entre el club y el mundo — sponsors, eventos, redes sociales y comunidad. Sin ellos, nada despega.",
    },
];

export default function Team() {
    return (
        <section id="equipo" className="relative z-10 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-6">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="accent-line mx-auto mb-5" />
                    <h2 className="section-title mb-4">
                        Nuestro{" "}
                        <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                            Equipo
                        </span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Somos estudiantes de distintas carreras con una cosa en común:
                        nos encanta construir cohetes y pasarla bien haciéndolo. 🚀
                    </p>
                </div>

                {/* Teams grid — 2×2 */}
                <div className="grid gap-6 sm:grid-cols-2">
                    {TEAMS.map((team) => (
                        <div
                            key={team.name}
                            className="team-card group p-8"
                            data-color={team.color}
                        >
                            <div className="team-icon mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl">
                                {team.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-bold">{team.name}</h3>
                            <p className="text-sm leading-relaxed text-text-muted">
                                {team.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <div className="glass-card mx-auto inline-block px-10 py-8">
                        <p className="mb-3 text-xl font-bold">
                            ¿Te tinca sumarte? 🙌
                        </p>
                        <p className="mb-6 text-sm text-text-muted max-w-md mx-auto">
                            No importa tu carrera ni tu experiencia. Si te motiva
                            aprender, construir y pasarla bien, ¡te estamos esperando!
                        </p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdN-On0V4bmve3Oc2dh_k56VDuE0CQ3KVzsbILfGCLU6K_XlA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn-glow text-sm">
                            ¡Súmate al club! →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
