import React from "react";
import styles from "./hero.module.css";

const HeroText = () => {
    return (
        <div className={styles.textContainer}>
            <div className={styles.nameText}>
                <h1>Hello, I'm Jacob</h1>
                <h1>
                    I am a{" "}
                    <span className={styles.highColor}>
                        full stack developer!
                    </span>
                </h1>
            </div>
            <p className={styles.bachelorsText}>B.E.Sc</p>
        </div>
    );
};

export default HeroText;
