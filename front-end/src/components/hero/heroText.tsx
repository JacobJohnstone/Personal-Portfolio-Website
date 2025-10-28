import React from "react";
import styles from "./hero.module.css";

const HeroText = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleConnectClick = () => {
        // You can add contact functionality here later
        console.log("Let's Connect clicked!");
    };

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
            <div className={styles.buttonContainer}>
                <button
                    className={styles.projectsButton}
                    onClick={scrollToProjects}>
                    View Projects
                </button>
                <button
                    className={styles.connectButton}
                    onClick={handleConnectClick}>
                    Let's Connect!
                </button>
            </div>
        </div>
    );
};

export default HeroText;
