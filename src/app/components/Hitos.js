"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const HITOS = [
  {
    id: "spaceapps",
    tag: "Primer Lugar",
    date: "2025",
    category: "NASA Space Apps Challenge",
    title: "1.er Lugar en NASA Space Apps Challenge Chile",
    description:
      "Participamos como club y uno de nuestros equipos obtuvo el primer lugar en la sede Chile del NASA Space Apps Challenge 2025, desarrollando soluciones innovadoras ante desafíos espaciales reales.",
    images: ["/hitos/spaceapps-2025.png"],
    alt: "Equipo ganador del NASA Space Apps Challenge 2025 en Chile",
  },
  {
    id: "bienvenida-novata",
    tag: "Comunidad UC",
    date: "Marzo 2026",
    category: "Campus San Joaquín",
    title: "Presentes en la Bienvenida Novata UC",
    description:
      "Estuvimos presentes con nuestro stand recibiendo a la nueva generación de novatos de la UC, compartiendo nuestra pasión por la cohetería e invitando a nuevos talentos a sumarse a Ursa Crux.",
    images: ["/hitos/bienvenidanovata-2025.jpeg"],
    alt: "Stand de Ursa Crux en la Bienvenida Novata de la Universidad Católica",
  },
  {
    id: "bienvenida-oficial",
    tag: "Evento Especial",
    date: "Abril 2026",
    category: "Bienvenida Oficial",
    title: "Bienvenida Oficial con Referentes de la Industria",
    description:
      "Realizamos un gran evento para recibir a los nuevos miembros del club, contando con charlas de Matilda Gaete (futura astronauta chilena), Sebastián Ogalde (NASA Jet Propulsion Laboratory), oficiales de la Fuerza Aérea Chilena (FACh) y miembros de otros clubes de cohetería.",
    images: ["/hitos/bienvenida-ccuc-2025.jpg"],
    alt: "Evento de bienvenida oficial con invitados del sector aeroespacial",
  },
  {
    id: "space-generation",
    tag: "Congreso Internacional",
    date: "2026",
    category: "Aeroespacial",
    title: "5 Miembros en LATAM Space Generation Workshop",
    description:
      "Cinco miembros de Ursa Crux asistieron al workshop internacional, debatiendo sobre el futuro del ecosistema aeroespacial en Chile y la región junto a destacados líderes de la industria.",
    images: ["/hitos/space-generation-workshop-2025.jpg"],
    alt: "Delegación del club en el LATAM Space Generation Workshop 2026",
  },
  {
    id: "critical-hit",
    tag: "Feria Tecnológica",
    date: "2026",
    category: "Ingeniería UC",
    title: "Presentes en la Feria CRItical HIT",
    description:
      "Participamos en la feria de innovación y proyectos en Ingeniería UC, interactuando con la comunidad universitaria, exhibiendo prototipos y motivando a estudiantes a postular al club.",
    images: ["/hitos/critical-hit.JPG"],
    alt: "Stand y prototipos de Ursa Crux en la feria CRItical HIT de Ingeniería UC",
  },
  {
    id: "aeromodelismo",
    tag: "Formación Técnica",
    date: "2026",
    category: "Visita Técnica",
    title: "Visita Técnica al Club de Aeromodelismo",
    description:
      "Tuvimos una provechosa visita técnica al club donde aprendimos directamente sobre técnicas de construcción, aerodinámica y vuelo de diversos tipos de aeroplanos a escala.",
    images: [
      "/hitos/aeromodelismo-1.jpg",
      "/hitos/aeromodelismo-2.jpg",
      "/hitos/aeromodelismo-3.jpg",
    ],
    alt: "Visita técnica de aprendizaje al Club de Aeromodelismo",
    isCollage: true,
  },
];

export default function Hitos() {
  const [current, setCurrent] = useState(0);
  const [offsetPx, setOffsetPx] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const isDragging = useRef(false);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  // Calculate pixel-accurate translation to center the current card in the container
  const updateOffset = useCallback(() => {
    if (!containerRef.current || !cardsRef.current[current]) return;

    const container = containerRef.current;
    const activeCard = cardsRef.current[current];

    const containerWidth = container.offsetWidth;
    const cardLeft = activeCard.offsetLeft;
    const cardWidth = activeCard.offsetWidth;

    // Centered formula: scroll track so card center aligns with container center
    const targetOffset = -(cardLeft - (containerWidth - cardWidth) / 2);
    setOffsetPx(targetOffset);
  }, [current]);

  useEffect(() => {
    updateOffset();
    const handleResize = () => updateOffset();
    window.addEventListener("resize", handleResize);

    // Enable smooth CSS transition after initial center calculation
    const timer = setTimeout(() => setMounted(true), 50);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [updateOffset]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + HITOS.length) % HITOS.length);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % HITOS.length);
  }, []);

  const goTo = useCallback((index) => {
    setCurrent(index);
  }, []);

  // Auto-advance every 7 seconds when not paused/hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      next();
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      }
    },
    [prev, next]
  );

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setIsPaused(true);
    isDragging.current = true;
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const swipeThreshold = 50;
    if (touchDeltaX.current > swipeThreshold) {
      prev();
    } else if (touchDeltaX.current < -swipeThreshold) {
      next();
    }
    setTimeout(() => setIsPaused(false), 4000);
  };

  return (
    <section
      id="hitos"
      className="relative z-10 py-16 sm:py-24 overflow-hidden"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Nuestros Hitos y Logros"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle,rgba(78,53,113,0.25)_0%,transparent_70%)]" />

      {/* Header */}
      <div className="mx-auto max-w-5xl px-6 text-center mb-12 sm:mb-16">
        <div className="accent-line mx-auto mb-5" />
        <h2 className="section-title mb-4">
          Nuestros <span className="text-accent">Hitos</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Los momentos, logros y competencias que marcan el rumbo de Ursa Crux
          en el desarrollo aeroespacial estudiantil.
        </p>
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden py-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Track */}
        <div
          className={`flex items-stretch gap-4 sm:gap-6 md:gap-8 ${
            mounted ? "transition-transform duration-500 ease-out" : ""
          }`}
          style={{
            transform: `translateX(${offsetPx}px)`,
          }}
        >
          {HITOS.map((hito, i) => {
            const isActive = i === current;

            return (
              <div
                key={hito.id}
                ref={(el) => (cardsRef.current[i] = el)}
                onClick={() => {
                  if (!isActive) goTo(i);
                }}
                className={`relative flex-shrink-0 w-[84vw] sm:w-[74vw] md:w-[68vw] lg:w-[64vw] max-w-[900px] select-none rounded-2xl overflow-hidden glass-card transition-all duration-500 flex flex-col ${
                  isActive
                    ? "opacity-100 scale-100 border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(78,53,113,0.35)] z-20 cursor-default"
                    : "opacity-35 scale-[0.92] sm:scale-[0.94] border-white/5 cursor-pointer brightness-[0.38] saturate-[0.6] hover:opacity-65 hover:brightness-75 z-10"
                }`}
                style={{
                  minHeight: "490px",
                }}
              >
                {/* Non-focused Dark Overlay Layer */}
                {!isActive && (
                  <div
                    className="absolute inset-0 bg-black/45 z-30 transition-opacity duration-500 pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                {/* Image Section */}
                <div className="relative h-[230px] sm:h-[300px] md:h-[360px] w-full bg-[#05020c] overflow-hidden flex-shrink-0">
                  {hito.isCollage ? (
                    // Collage Layout for Aeromodelismo (3 photos)
                    <div className="grid grid-cols-12 h-full w-full gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-black/50">
                      {/* Dominant left photo (7 cols) */}
                      <div className="relative col-span-7 h-full overflow-hidden rounded-lg">
                        <Image
                          src={hito.images[0]}
                          alt={`${hito.alt} - Foto 1`}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 40vw"
                        />
                      </div>
                      {/* Secondary stacked photos (5 cols) */}
                      <div className="col-span-5 grid grid-rows-2 h-full gap-1.5 sm:gap-2">
                        <div className="relative h-full overflow-hidden rounded-lg">
                          <Image
                            src={hito.images[1]}
                            alt={`${hito.alt} - Foto 2`}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            sizes="(max-width: 768px) 35vw, 25vw"
                          />
                        </div>
                        <div className="relative h-full overflow-hidden rounded-lg">
                          <Image
                            src={hito.images[2]}
                            alt={`${hito.alt} - Foto 3`}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            sizes="(max-width: 768px) 35vw, 25vw"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Single Featured Image
                    <Image
                      src={hito.images[0]}
                      alt={hito.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 70vw, 900px"
                      priority={i === 0}
                    />
                  )}

                  {/* Gradient shadow overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02000A] via-transparent to-transparent opacity-80" />

                  {/* Card category badge on image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                      {hito.tag}
                    </span>
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white/90 border border-white/10">
                      {hito.date}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-[#03010c]/90">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold tracking-wider uppercase text-white/60">
                        {hito.category}
                      </span>
                      <span className="font-mono text-xs font-semibold text-accent/90">
                        {String(i + 1).padStart(2, "0")} / {String(HITOS.length).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3">
                      {hito.title}
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed text-white/95 max-w-3xl">
                      {hito.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prev / Next Controls (Floating overlay) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-6 md:px-10">
          <button
            onClick={prev}
            className="pointer-events-auto flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#02000A]/85 border border-white/15 text-white backdrop-blur-md shadow-xl transition-all duration-300 hover:bg-accent hover:border-accent hover:scale-110 active:scale-95"
            aria-label="Hito anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            className="pointer-events-auto flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#02000A]/85 border border-white/15 text-white backdrop-blur-md shadow-xl transition-all duration-300 hover:bg-accent hover:border-accent hover:scale-110 active:scale-95"
            aria-label="Hito siguiente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dots / Indicators */}
      <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2.5">
        {HITOS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-accent shadow-[0_0_12px_rgba(245,108,39,0.7)]"
                : "w-2.5 bg-white/20 hover:bg-white/45"
            }`}
            aria-label={`Ir a hito ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
