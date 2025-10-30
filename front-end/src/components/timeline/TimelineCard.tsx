import React from "react";
import styles from "./timeline.module.css";

interface TimelineCardProps {
    year: string;
    title: string;
    description: string;
    isLeft?: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
    year,
    title,
    description,
    isLeft = false,
}) => {
    return (
        <div
            className={`${styles.timelineCard} ${isLeft ? styles.left : styles.right}`}
        >
            <div className={styles.cardContent}>
                <div className={styles.year}>{year}</div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.timelineDot}></div>
        </div>
    );
};

export default TimelineCard;
