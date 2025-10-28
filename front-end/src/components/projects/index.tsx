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
        image: "/assets/images/amorie/amorieDownloadPreview.jpg",
        technologies: [
            "/assets/images/technologies/react.png",
            "/assets/images/technologies/firebaseIcon.webp",
            "/assets/images/technologies/javascriptIcon.png",
            "/assets/images/technologies/css-icon.png",
            "/assets/images/technologies/html-icon.webp",
            "/assets/images/technologies/git-icon.png",
        ],
    },
    {
        id: 2,
        title: "Astronomy Gallery",
        description:
            "Web application showcasing astronomical including nebulas, galaxies, and more",
        image: "/assets/images/astroApp/orionNebula.png",
        technologies: [
            "/assets/images/technologies/react.png",
            "/assets/images/technologies/typescript-icon.png",
            "/assets/images/technologies/css-icon.png",
            "/assets/images/technologies/html-icon.webp",
            "/assets/images/technologies/git-icon.png",
            "/assets/images/technologies/githubIcon.png",
            "/assets/images/technologies/nextjs-icon.png",
        ],
    },
    {
        id: 3,
        title: "The Last Descent",
        description:
            "A short action/adventure game submitted to the 17th Pirate Software game jam",
        image: "/assets/images/theLastDescent/theLastDescent.png",
        technologies: [
            "/assets/images/technologies/react.png",
            "/assets/images/technologies/javascriptIcon.png",
            "/assets/images/technologies/css-icon.png",
            "/assets/images/technologies/html-icon.webp",
            "/assets/images/technologies/git-icon.png",
            "/assets/images/technologies/githubIcon.png",
        ],
    },
    {
        id: 4,
        title: "AI Image Translation",
        description:
            "A system designed to transform artificial surgery practice into a realistic image",
        image: "/assets/images/aiImageTranslation/modelImage.jpg",
        technologies: [
            "/assets/images/technologies/react.png",
            "/assets/images/technologies/typescript-icon.png",
            "/assets/images/technologies/css-icon.png",
            "/assets/images/technologies/html-icon.webp",
            "/assets/images/technologies/git-icon.png",
            "/assets/images/technologies/githubIcon.png",
            "/assets/images/technologies/nextjs-icon.png",
            "/assets/images/technologies/neon-db-icon.png",
        ],
    },
    {
        id: 5,
        title: "Haunting Grounds",
        description:
            "A mini steal/action game created for the 16th Pirate Software game jam",
        image: "/assets/images/hauntingGrounds/titleScreen.png",
        technologies: [
            "/assets/images/technologies/Unity-icon.png",
            "/assets/images/technologies/c-sharp-icon.png",
            "/assets/images/technologies/git-icon.png",
            "/assets/images/technologies/githubIcon.png",
            "/assets/images/technologies/FL_Studio_11_icon.webp",
            "/assets/images/technologies/aseprite-icon.png",
        ],
    },
    {
        id: 6,
        title: "Pokédex Application",
        description:
            "Interactive Pokédex with search functionality and detailed Pokémon information",
        image: "/assets/images/pokedex/Pokedex.jpg",
        technologies: [
            "/assets/images/technologies/react.png",
            "/assets/images/technologies/javascriptIcon.png",
            "/assets/images/technologies/css-icon.png",
            "/assets/images/technologies/html-icon.webp",
            "/assets/images/technologies/git-icon.png",
            "/assets/images/technologies/githubIcon.png",
        ],
    },
];

const Projects = () => {
    const handleProjectClick = (projectId: number) => {
        // TODO: Implement routing to individual project pages
        console.log(`Clicked on project ${projectId}`);
    };

    return (
        <section id="projects" className={styles.projectsSection}>
            <h2 className={styles.sectionTitle}>My Projects</h2>
            <div className={styles.projectsGrid}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={styles.projectCard}
                        onClick={() => handleProjectClick(project.id)}>
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
