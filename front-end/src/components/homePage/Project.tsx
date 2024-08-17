import ProjectFeature from "./ProjectFeature";

type ProjectProps = {
    title : string;
    //featureName : string;
    //featureImage : React.reactComponent?
}

const Project = ( { title } : ProjectProps ) => {
    return (

        <div>
            <h4>{title}</h4>
            <div>
                
            </div>
            <div>
                {//<ProjectImage />
                }
            </div>
        </div>

    );

}

export default Project;