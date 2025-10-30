import { useEffect, useState } from "react";
import styles from "./hero.module.css";

const HeroText = () => {
    const [heroString, setHeroString] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const buildString = async () => {
            let currentString = "";
            const subString = "software engineer";
            const stringArr = subString.split("");

            // Helper function to convert setTimeout to a Promise
            const delay = (ms: number) =>
                new Promise((resolve) => setTimeout(resolve, ms));

            for (let i = 0; i < stringArr.length; i++) {
                const delayMs = i == 0 ? 1000 : Math.random() * 20 + 80; // longer delay before the string "starts typing"

                await delay(delayMs);
                currentString += stringArr[i];
                setHeroString(currentString);
            }
            setIsTyping(false);
        };

        buildString();
    }, []);

    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleConnectClick = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.textContainer}>
            <div className={styles.nameText}>
                <h1>Hello, I'm JACOB</h1>
                <h1 className={styles.lineTwo}>
                    I am an aspiring{" "}
                    <span className={styles.highColor}>
                        {heroString}
                        <span
                            className={`${styles.cursor} ${!isTyping ? styles.cursorHidden : ""}`}>
                            |
                        </span>
                    </span>
                </h1>
            </div>
            <p className={styles.bachelorsText}>B.E.Sc</p>
            <div className={styles.buttonContainer}>
                <button
                    className={styles.projectsButton}
                    onClick={scrollToProjects}>
                    VIEW PROJECTS
                </button>
                <button
                    className={styles.connectButton}
                    onClick={handleConnectClick}>
                    LET'S CONNECT!
                </button>
            </div>
        </div>
    );
};

export default HeroText;
