import React from "react";
import styles from "./timeline.module.css";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
    const timelineData = [
        {
            year: "2020",
            title: "Started Coding Journey",
            description:
                "Began my programming journey and learned my first coding language, laying the foundation for my future in software development.",
        },
        {
            year: "2022",
            title: "First Web Application",
            description:
                "Built my first web application, combining frontend and backend technologies to create a functional project.",
        },
        {
            year: "2023",
            title: "First AI Project",
            description:
                "Developed my first artificial intelligence project, exploring machine learning and AI technologies.",
        },
        {
            year: "2024",
            title: "Graduated",
            description:
                "Successfully completed my academic journey and graduated with a strong foundation in computer science.",
        },
        {
            year: "May 2024 - Present",
            title: "First Mobile App Published",
            description:
                "Built and published my first mobile application to the App Store, marking a significant milestone in my development career.",
        },
    ];

    return (
        <div className={styles.timelineContainer}>
            <h2 className={styles.timelineTitle}>My Journey</h2>
            <div className={styles.timeline}>
                {timelineData.map((item, index) => (
                    <TimelineCard
                        key={index}
                        year={item.year}
                        title={item.title}
                        description={item.description}
                        isLeft={index % 2 === 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
