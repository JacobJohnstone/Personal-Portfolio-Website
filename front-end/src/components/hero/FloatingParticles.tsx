import React, { useEffect, useRef } from "react";
import styles from "./hero.module.css";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
}

const FloatingParticles: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>();
    const lastTimeRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size to match container
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Create particles
        const createParticles = () => {
            const particleCount = 420;
            particlesRef.current = [];

            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: Math.random() * 0.3 + 0.1, // Move right (positive x)
                    vy: Math.random() * 0.3 + 0.1, // Move down (positive y)
                    size: Math.random() * 5 + 1,
                    opacity: Math.random() * 0.8 + 0.2,
                });
            }
        };

        createParticles();

        // Animation loop
        const animate = (currentTime: number) => {
            // Calculate delta time for frame-rate independent movement
            const deltaTime =
                lastTimeRef.current > 0
                    ? (currentTime - lastTimeRef.current) / 1000 // Convert to seconds
                    : 0;
            lastTimeRef.current = currentTime;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Speed multiplier to keep consistent movement (units per second)
            const speedMultiplier = 170; // Adjust this to control overall speed

            particlesRef.current.forEach((particle) => {
                // Update position with delta time for frame-rate independence
                particle.x += particle.vx * speedMultiplier * deltaTime;
                particle.y += particle.vy * speedMultiplier * deltaTime;

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Draw particle with neon glow
                ctx.save();
                ctx.globalAlpha = particle.opacity;

                // Create glow effect
                ctx.shadowColor = "#ff8c00";
                ctx.shadowBlur = 15;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;

                ctx.fillStyle = "#ff8c00";
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();

                // Add inner bright core
                ctx.shadowBlur = 0;
                ctx.fillStyle = "#ffa500";
                ctx.beginPath();
                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size * 0.6,
                    0,
                    Math.PI * 2
                );
                ctx.fill();

                ctx.restore();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate(0);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            lastTimeRef.current = 0;
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.particlesCanvas} />;
};

export default FloatingParticles;
