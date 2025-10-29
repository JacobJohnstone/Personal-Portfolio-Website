import styles from "./projectCard.module.css";

interface ProjectCardProps {
    id: number;
    title: string;
    year?: number;
    description: string;
    image: string;
    technologies: string[];
    onClick: (projectId: number) => void;
}

const ProjectCard = ({
    id,
    title,
    year,
    description,
    image,
    technologies,
    onClick,
}: ProjectCardProps) => {
    return (
        <div className={styles.projectCard} onClick={() => onClick(id)}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.projectImage} />
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{title}</h3>
                {year && <span className={styles.projectYear}>{year}</span>}
                <p className={styles.projectDescription}>{description}</p>
            </div>
            <div className={styles.techSection}>
                <div className={styles.techIconsContainer}>
                    <div className={styles.techIcons}>
                        {technologies.map((tech, index) => (
                            <img
                                key={index}
                                src={tech}
                                alt={`Technology ${index + 1}`}
                                className={styles.techIcon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
