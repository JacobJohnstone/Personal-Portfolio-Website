type ProjectFeatureProps = {
    name: string;
}

const ProjectFeature = ( { name } : ProjectFeatureProps ) => {

    return(

        <div>
            <h4>{name}</h4>
            <button>+</button>
        </div>

    );
}

export default ProjectFeature;