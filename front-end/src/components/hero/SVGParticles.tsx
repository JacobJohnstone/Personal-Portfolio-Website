import React, { useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";

interface SVGParticle {
    id: string;
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    rotation: number;
    rotationSpeed: number;
}

const SVGParticles: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<SVGParticle[]>([]);
    const animationRef = useRef<number>();
    const lastTimeRef = useRef<number>(0);
    const isVisibleRef = useRef<boolean>(true);

    // Create cherry blossom petal SVG path
    const petalPath = "M0,-10 Q-8,0 -5,8 Q0,12 5,8 Q8,0 0,-10";

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Create particles
        const createParticles = () => {
            const particleCount = 40; // Even fewer for SVG
            particlesRef.current = [];

            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    id: `particle-${i}`,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    vx: Math.random() * 0.3 + 0.1,
                    vy: Math.random() * 0.3 + 0.1,
                    size: Math.random() * 8 + 4, // Smaller sizes for SVG
                    opacity: Math.random() * 0.4 + 0.2,
                    rotation: Math.random() * Math.PI * 2,
                    rotationSpeed: (Math.random() - 0.5) * 2,
                });
            }
        };

        createParticles();

        // Animation loop
        const animate = (currentTime: number) => {
            if (!isVisibleRef.current) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            const deltaTime =
                lastTimeRef.current > 0
                    ? (currentTime - lastTimeRef.current) / 1000
                    : 0;
            lastTimeRef.current = currentTime;

            const speedMultiplier = 100;

            particlesRef.current.forEach((particle) => {
                particle.x += particle.vx * speedMultiplier * deltaTime;
                particle.y += particle.vy * speedMultiplier * deltaTime;
                particle.rotation += particle.rotationSpeed * deltaTime;

                // Wrap around edges
                if (particle.x < -50) particle.x = window.innerWidth + 50;
                if (particle.x > window.innerWidth + 50) particle.x = -50;
                if (particle.y < -50) particle.y = window.innerHeight + 50;
                if (particle.y > window.innerHeight + 50) particle.y = -50;
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        // Set up intersection observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    isVisibleRef.current = entry.isIntersecting;
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(container);
        animate(0);

        return () => {
            observer.disconnect();
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className={styles.particlesCanvas}>
            <svg
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
            >
                {particlesRef.current.map((particle) => (
                    <g
                        key={particle.id}
                        transform={`translate(${particle.x}, ${particle.y}) rotate(${
                            (particle.rotation * 180) / Math.PI
                        })`}
                        opacity={particle.opacity}
                    >
                        <path
                            d={petalPath}
                            fill="#FF8FA3"
                            transform={`scale(${particle.size / 10})`}
                            style={{
                                filter: "drop-shadow(0 0 3px #FF6B9D)",
                            }}
                        />
                    </g>
                ))}
            </svg>
        </div>
    );
};

export default SVGParticles;
