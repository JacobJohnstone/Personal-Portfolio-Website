import React, { useEffect, useRef } from "react";
import styles from "./hero.module.css";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    rotation: number;
    rotationSpeed: number;
}

const FloatingParticles: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>();
    const lastTimeRef = useRef<number>(0);
    const leafImageRef = useRef<HTMLCanvasElement | null>(null);

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

        // Pre-render leaf shape to offscreen canvas (only once for performance)
        const createLeafImage = () => {
            // Base size for the leaf sprite (will be scaled when drawing)
            const baseSize = 20;
            const leafCanvas = document.createElement("canvas");
            leafCanvas.width = baseSize * 2;
            leafCanvas.height = baseSize * 2.4;
            const leafCtx = leafCanvas.getContext("2d");

            if (!leafCtx) return null;

            // Draw cherry blossom petal shape
            leafCtx.beginPath();
            const width = baseSize;
            const height = baseSize * 1.2;

            // Center the leaf in the canvas
            const centerX = baseSize;
            const centerY = baseSize * 1.2;

            // Start at top center
            leafCtx.moveTo(centerX, centerY - height / 2);

            // Left side curve
            leafCtx.quadraticCurveTo(
                centerX - width / 2,
                centerY,
                centerX - width / 3,
                centerY + height / 2
            );

            // Bottom point
            leafCtx.lineTo(centerX, centerY + height / 2);

            // Right side curve
            leafCtx.quadraticCurveTo(
                centerX + width / 2,
                centerY,
                centerX,
                centerY - height / 2
            );

            leafCtx.closePath();
            leafCtx.fillStyle = "#FF8FA3";
            leafCtx.fill();

            // Add inner bright core
            leafCtx.beginPath();
            leafCtx.moveTo(centerX, centerY - (height * 0.7) / 2);
            leafCtx.quadraticCurveTo(
                centerX - (width * 0.7) / 2,
                centerY,
                centerX - (width * 0.7) / 3,
                centerY + (height * 0.7) / 2
            );
            leafCtx.lineTo(centerX, centerY + (height * 0.7) / 2);
            leafCtx.quadraticCurveTo(
                centerX + (width * 0.7) / 2,
                centerY,
                centerX,
                centerY - (height * 0.7) / 2
            );
            leafCtx.closePath();
            leafCtx.fillStyle = "#FFB6C1";
            leafCtx.fill();

            return leafCanvas;
        };

        // Create cached leaf image
        leafImageRef.current = createLeafImage();

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
                    size: Math.random() * 13 + 2,
                    opacity: Math.random() * 0.4 + 0.2,
                    rotation: Math.random() * Math.PI * 2,
                    rotationSpeed: (Math.random() - 0.5) * 2, // Random rotation speed
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

                // Update rotation for tumbling effect
                particle.rotation += particle.rotationSpeed * deltaTime;

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Draw pre-rendered leaf image (much faster than drawing path each frame)
                if (leafImageRef.current) {
                    ctx.save();
                    ctx.globalAlpha = particle.opacity;

                    // Create glow effect
                    ctx.shadowColor = "#FF6B9D";
                    ctx.shadowBlur = 15;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;

                    // Scale factor (base size is 20, so scale to particle.size)
                    const scale = particle.size / 20;

                    // Translate and rotate around the leaf center
                    ctx.translate(particle.x, particle.y);
                    ctx.rotate(particle.rotation);
                    ctx.scale(scale, scale);

                    // Draw the cached leaf image (centered)
                    ctx.drawImage(
                        leafImageRef.current,
                        -leafImageRef.current.width / 2,
                        -leafImageRef.current.height / 2
                    );

                    ctx.restore();
                }
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
