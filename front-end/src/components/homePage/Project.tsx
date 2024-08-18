import ProjectFeature from "./ProjectFeature";

type ProjectProps = {
    title : string;
    features : string[];
    //featureImage : React.reactComponent?
}

const Project = ( { title, features } : ProjectProps ) => {
    return (

        <div>
            <h4>{title}</h4>
            <div>
                {features.map((feature, i) => <ProjectFeature name={features[i]}/>)}
            </div>
            <div>
                {//<ProjectImage />
                }
            </div>
        </div>

    );

}

export default Project;