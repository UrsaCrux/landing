"use client";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section id="contacto" className="relative z-10 py-28 sm:py-36">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="accent-line mx-auto mb-5" />
                    <h2 className="section-title mb-4">
                        <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                            Contáctanos
                        </span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        ¿Tienes preguntas o quieres unirte? Escríbenos y te responderemos lo antes
                        posible.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-5">
                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="glass-card p-8 lg:col-span-3"
                    >
                        <div className="mb-6 grid gap-6 sm:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-text-muted">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/30 placeholder:text-white/20"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-text-muted">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/30 placeholder:text-white/20"
                                    placeholder="tu@email.com"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="mb-2 block text-sm font-medium text-text-muted">
                                Mensaje
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/30 placeholder:text-white/20"
                                placeholder="Cuéntanos sobre ti y por qué te interesa la cohetería..."
                            />
                        </div>
                        <button type="submit" className="btn-glow w-full sm:w-auto">
                            {submitted ? "✓ Enviado" : "Enviar mensaje"}
                        </button>
                        {submitted && (
                            <p className="mt-4 text-sm text-green-400 animate-fade-in">
                                ¡Gracias por tu mensaje! Te contactaremos pronto.
                            </p>
                        )}
                    </form>

                    {/* Info sidebar */}
                    <div className="flex flex-col gap-6 lg:col-span-2">
                        {/* Email */}
                        <div className="glass-card p-6">
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-xl">
                                ✉️
                            </div>
                            <h3 className="mb-1 text-sm font-bold">Email</h3>
                            <p className="text-sm text-text-muted">coheteria.ursacrux@gmail.com</p>
                        </div>

                        {/* Instagram */}
                        <div className="glass-card p-6">
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-xl">
                                📸
                            </div>
                            <h3 className="mb-1 text-sm font-bold">Instagram</h3>
                            <a
                                href="https://www.instagram.com/coheteria_ucrux/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-accent hover:underline"
                            >
                                @coheteria_ucrux
                            </a>
                        </div>

                        {/* Location */}
                        <div className="glass-card p-6">
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-xl">
                                📍
                            </div>
                            <h3 className="mb-1 text-sm font-bold">Ubicación</h3>
                            <p className="text-sm text-text-muted">
                                Campus San Joaquín, Pontificia Universidad Católica de Chile,
                                Santiago.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
