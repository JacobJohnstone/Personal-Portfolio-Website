type ProjectFeatureProps = {
    name: string;
};

const ProjectFeature = ({ name }: ProjectFeatureProps) => {
    return (
        <div>
            <h4>{name}</h4>
        </div>
    );
};

export default ProjectFeature;
