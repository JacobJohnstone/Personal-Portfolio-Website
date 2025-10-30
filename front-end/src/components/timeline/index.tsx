import styles from "./timeline.module.css";
import TimelineCard from "./TimelineCard";
import timelineData from "../../data/timeline.json";

const Timeline = () => {
    return (
        <div className={styles.timelineWrapper}>
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
        </div>
    );
};

export default Timeline;
