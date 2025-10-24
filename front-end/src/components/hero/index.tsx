import React from "react";
import styles from "./hero.module.css";
import HeroText from "./heroText";
import FloatingParticles from "./FloatingParticles";

const Hero = () => {
    return (
        <div className={styles.root}>
            <FloatingParticles />
            <HeroText />
        </div>
    );
};

export default Hero;
