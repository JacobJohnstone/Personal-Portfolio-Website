import styles from "./projects.module.css";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Couples App",
        description:
            "A mobile app for couples to share moments, plan dates, and strengthen relationships",
        image: "/src/images/couples-chatting-page.png",
        technologies: [
            "/src/images/react.png",
            "/src/images/firebaseIcon.webp",
            "/src/images/javascriptIcon.png",
            "/src/images/css-icon.png",
            "/src/images/html-icon.webp",
            "/src/images/git-icon.png",
            "/src/images/githubIcon.png",
        ],
    },
    {
        id: 2,
        title: "Music Streaming Platform",
        description:
            "Full-stack music streaming application with playlist management and social features",
        image: "/src/images/MusicLanding.jpg",
        technologies: [
            "/src/images/react.png",
            "/src/images/nodejs-1-logo-png-transparent.png",
            "/src/images/MongoDB-Logo.png",
            "/src/images/javascriptIcon.png",
            "/src/images/css-icon.png",
            "/src/images/express.png",
            "/src/images/git-icon.png",
        ],
    },
    {
        id: 3,
        title: "Pokédex Application",
        description:
            "Interactive Pokédex with search functionality and detailed Pokémon information",
        image: "/src/images/Pokedex.jpg",
        technologies: [
            "/src/images/react.png",
            "/src/images/javascriptIcon.png",
            "/src/images/css-icon.png",
            "/src/images/html-icon.webp",
            "/src/images/git-icon.png",
            "/src/images/githubIcon.png",
        ],
    },
    {
        id: 4,
        title: "Astronomy Gallery",
        description:
            "Web application showcasing astronomical images and educational content",
        image: "/src/images/astronomy-home.png",
        technologies: [
            "/src/images/react.png",
            "/src/images/typescript-icon.png",
            "/src/images/css-icon.png",
            "/src/images/html-icon.webp",
            "/src/images/git-icon.png",
            "/src/images/githubIcon.png",
            "/src/images/nextjs-icon.png",
        ],
    },
    {
        id: 5,
        title: "Admin Dashboard",
        description:
            "Comprehensive admin panel for managing users, content, and system settings",
        image: "/src/images/astro-admin-panel.png",
        technologies: [
            "/src/images/react.png",
            "/src/images/typescript-icon.png",
            "/src/images/css-icon.png",
            "/src/images/html-icon.webp",
            "/src/images/git-icon.png",
            "/src/images/githubIcon.png",
            "/src/images/nextjs-icon.png",
            "/src/images/neon-db-icon.png",
        ],
    },
    {
        id: 6,
        title: "Game Development",
        description:
            "Unity-based game with custom mechanics and engaging gameplay experience",
        image: "/src/images/gameplay_1.png",
        technologies: [
            "/src/images/Unity-icon.png",
            "/src/images/c-sharp-icon.png",
            "/src/images/git-icon.png",
            "/src/images/githubIcon.png",
            "/src/images/FL_Studio_11_icon.webp",
            "/src/images/aseprite-icon.png",
        ],
    },
];

const Projects = () => {
    const handleProjectClick = (projectId: number) => {
        // TODO: Implement routing to individual project pages
        console.log(`Clicked on project ${projectId}`);
    };

    return (
        <section className={styles.projectsSection}>
            <h2 className={styles.sectionTitle}>My Projects</h2>
            <div className={styles.projectsGrid}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={styles.projectCard}
                        onClick={() => handleProjectClick(project.id)}
                    >
                        <div className={styles.imageContainer}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className={styles.projectImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.projectTitle}>
                                {project.title}
                            </h3>
                            <p className={styles.projectDescription}>
                                {project.description}
                            </p>
                        </div>
                        <div className={styles.techSection}>
                            <div className={styles.techIconsContainer}>
                                <div className={styles.techIcons}>
                                    {project.technologies.map((tech, index) => (
                                        <img
                                            key={index}
                                            src={tech}
                                            alt={`Technology ${index + 1}`}
                                            className={styles.techIcon}
                                        />
                                    ))}
                                    {/* Duplicate icons for seamless carousel */}
                                    {project.technologies.map((tech, index) => (
                                        <img
                                            key={`duplicate-${index}`}
                                            src={tech}
                                            alt={`Technology ${index + 1}`}
                                            className={styles.techIcon}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
