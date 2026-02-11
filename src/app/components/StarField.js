"use client";
import { useEffect, useRef } from "react";

export default function StarField() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationId;
        let stars = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
            initStars();
        }

        function initStars() {
            stars = [];
            const count = Math.floor((canvas.width * canvas.height) / 8000);
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 1.5 + 0.3,
                    alpha: Math.random(),
                    speed: Math.random() * 0.0015 + 0.0005,
                    phase: Math.random() * Math.PI * 2,
                });
            }
        }

        function draw(time) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const s of stars) {
                const twinkle = 0.5 + 0.5 * Math.sin(time * s.speed + s.phase);
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${twinkle * 0.8})`;
                ctx.fill();
            }
            animationId = requestAnimationFrame(draw);
        }

        resize();
        animationId = requestAnimationFrame(draw);
        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-0"
            aria-hidden="true"
        />
    );
}
