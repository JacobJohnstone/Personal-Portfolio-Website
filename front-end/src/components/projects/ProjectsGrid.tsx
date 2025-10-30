import styles from "./projectsGrid.module.css";
import ProjectCard from "./ProjectCard";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
}

interface ProjectsGridProps {
    projects: Project[];
    onProjectClick: (projectId: number) => void;
}

const ProjectsGrid = ({ projects, onProjectClick }: ProjectsGridProps) => {
    return (
        <div className={styles.projectsGrid}>
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    {...project}
                    onClick={onProjectClick}
                />
            ))}
        </div>
    );
};

export default ProjectsGrid;
