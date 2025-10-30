import styles from "./education.module.css";

const Education = () => {
    const courseWork = [
        "Web Development",
        "Networking",
        "Operating Systems",
        "Artificial Intelligence I",
        "Artificial Intelligence II",
        "Data Structures and Algorithms",
        "Software Engineering",
        "Database Systems",
    ];

    return (
        <section id="education" className={styles.educationSection}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.educationContent}>
                <div className={styles.schoolCard}>
                    <h3 className={styles.schoolName}>
                        The University of Western Ontario
                    </h3>
                    <div className={styles.courseWorkSection}>
                        <h4 className={styles.courseWorkTitle}>
                            Relevant Coursework
                        </h4>
                        <ul className={styles.courseList}>
                            {courseWork.map((course, index) => (
                                <li key={index} className={styles.courseItem}>
                                    {course}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
