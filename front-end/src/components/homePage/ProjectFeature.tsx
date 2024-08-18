type ProjectFeatureProps = {
    name: string;
}

const ProjectFeature = ( { name } : ProjectFeatureProps ) => {

    return(

        <div>
            <button>{name}</button>
        </div>

    );
}

export default ProjectFeature;