import React from "react";
import styles from "./hero.module.css";
import HeroText from "./heroText";

const Hero = () => {
    return (
        <div className={styles.root}>
            <HeroText />
        </div>
    );
};

export default Hero;
