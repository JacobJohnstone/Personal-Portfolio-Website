import { useEffect, useRef, useState } from "react";
import styles from "./projectModal.module.css";

interface Project {
    id: number;
    title: string;
    year?: number;
    description: string;
    detailedDescription?: string;
    nextSteps?: string[];
    image: string;
    technologies: string[];
    users?: number;
    links?: {
        github?: string;
        view?: string;
        [key: string]: string | undefined;
    };
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const [animatedUsers, setAnimatedUsers] = useState(0);
    const animationFrameRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);

    // Animate users count when project changes
    useEffect(() => {
        if (!project || !project.users) {
            setAnimatedUsers(0);
            return;
        }

        setAnimatedUsers(0);
        startTimeRef.current = null;

        const animate = (timestamp: number) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }

            const elapsed = timestamp - startTimeRef.current;
            const duration = 1250; // 1.5 seconds
            const progress = Math.min(elapsed / duration, 1);

            // Use easeOutQuad for smooth animation
            const easeOutQuad = (t: number) => t * (2 - t);
            const easedProgress = easeOutQuad(progress);

            const currentValue = Math.floor(easedProgress * project.users!);
            setAnimatedUsers(currentValue);

            if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(animate);
            } else {
                setAnimatedUsers(project.users!);
            }
        };

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [project]);

    useEffect(() => {
        // Handle ESC key press
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === overlayRef.current) {
            onClose();
        }
    };

    if (!project) return null;

    return (
        <div
            ref={overlayRef}
            className={styles.overlay}
            onClick={handleOverlayClick}>
            <div ref={modalRef} className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>
                <div className={styles.modalContent}>
                    <div className={styles.imageContainer}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className={styles.modalImage}
                        />
                    </div>
                    <div className={styles.contentSection}>
                        <h2 className={styles.modalTitle}>{project.title}</h2>
                        <div className={styles.headerInfo}>
                            {project.year && (
                                <span className={styles.modalYear}>
                                    {project.year}
                                </span>
                            )}
                            {project.users !== undefined && (
                                <div className={styles.usersCount}>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    <span className={styles.usersNumber}>
                                        {animatedUsers.toLocaleString()}+
                                    </span>
                                    <span className={styles.usersLabel}>
                                        {" "}
                                        users
                                    </span>
                                </div>
                            )}
                        </div>
                        <p className={styles.modalDescription}>
                            {project.detailedDescription || project.description}
                        </p>
                        {project.nextSteps && project.nextSteps.length > 0 && (
                            <div className={styles.nextStepsSection}>
                                <h3 className={styles.nextStepsTitle}>
                                    Next Steps
                                </h3>
                                <ul className={styles.nextStepsList}>
                                    {project.nextSteps.map((step, index) => (
                                        <li
                                            key={index}
                                            className={styles.nextStepsItem}>
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {project.links &&
                            Object.keys(project.links).length > 0 && (
                                <div className={styles.linksSection}>
                                    <h3 className={styles.linksTitle}>Links</h3>
                                    <div className={styles.linksContainer}>
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.linkButton}>
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor">
                                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                GitHub
                                            </a>
                                        )}
                                        {project.links.view && (
                                            <a
                                                href={project.links.view}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.linkButton}>
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                    <polyline points="15 3 21 3 21 9" />
                                                    <line
                                                        x1="10"
                                                        y1="14"
                                                        x2="21"
                                                        y2="3"
                                                    />
                                                </svg>
                                                View Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        <div className={styles.technologiesSection}>
                            <h3 className={styles.technologiesTitle}>
                                Technologies Used
                            </h3>
                            <div className={styles.technologiesGrid}>
                                {project.technologies.map((tech, index) => (
                                    <div
                                        key={index}
                                        className={styles.techIconWrapper}>
                                        <img
                                            src={tech}
                                            alt={`Technology ${index + 1}`}
                                            className={styles.techIcon}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
