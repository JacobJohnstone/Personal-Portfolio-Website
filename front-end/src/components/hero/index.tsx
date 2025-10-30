import React, { useState, useEffect } from "react";
import styles from "./hero.module.css";
import HeroText from "./heroText";
import FloatingParticles from "./FloatingParticles";
import SVGParticles from "./SVGParticles";
import PerformanceControls from "./PerformanceControls";

const Hero = () => {
    const [particleCount, setParticleCount] = useState(60);
    const [useSVG, setUseSVG] = useState(false);
    const [lowPowerMode, setLowPowerMode] = useState(false);

    // Auto-detect low power devices
    useEffect(() => {
        const isLowPower =
            navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (isLowPower || prefersReducedMotion) {
            setLowPowerMode(true);
            setUseSVG(true);
            setParticleCount(30);
        }
    }, []);

    return (
        <div className={styles.root}>
            {useSVG ? <SVGParticles /> : <FloatingParticles />}
            <HeroText />
            <div className={styles.particleFade}></div>
            <PerformanceControls
                onParticleCountChange={setParticleCount}
                onUseSVGChange={setUseSVG}
                onLowPowerModeChange={setLowPowerMode}
            />
        </div>
    );
};

export default Hero;
