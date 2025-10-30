import { useState } from "react";
import styles from "./projects.module.css";
import projectsData from "../../data/projects.json";
import ProjectsGrid from "./ProjectsGrid";
import ProjectModal from "./ProjectModal";

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

const projects: Project[] = projectsData as Project[];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );

    const handleProjectClick = (projectId: number) => {
        const project = projects.find((p) => p.id === projectId);
        setSelectedProject(project || null);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <section id="projects" className={styles.projectsSection}>
                <h2 className={styles.sectionTitle}>My Projects</h2>
                <ProjectsGrid
                    projects={projects}
                    onProjectClick={handleProjectClick}
                />
                {/* <div className={styles.viewMoreContainer}>
                    <p className={styles.viewMore}>MORE COMING SOON!</p>
                </div> */}
            </section>
            <ProjectModal
                project={selectedProject}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default Projects;
