import ProjectFeature from "./ProjectFeature";
import pointers from '../../images/PointerPictures.jpg';
import ER from "../../images/ER-Design.png"
import backend from "../../images/PreviousSessionsBackendCode.png"
import loading from "../../images/loading.gif";
import defaultDatabase from "../../images/DatabaseIcon.png"
import { useEffect, useState } from "react";

type ProjectProps = {
    title : string;
    description: string;
    features : string[];
    featureImages : string[];
}

const Project = ( { title, features, description, featureImages } : ProjectProps ) => {

    const [image, setImage] = useState(loading);
    const [alt, setAlt] = useState("Loading...");

    useEffect(() => {
        setImage(defaultDatabase); // title image
    }, [title])

    function handleFeatureClick (index : number) {
        setImage(featureImages[index]);
        setAlt(features[index]);
    }

    return (

        <div>
            <h4>{ title }</h4>
            <p>{ description }</p>
            <div>
                <ul>
                    { features.map((feature, i) => <li key={i} onClick={(e) => handleFeatureClick(i)}><ProjectFeature name={features[i]}/></li>)}
                </ul>
            </div>
            <div>
                <img src={image} alt={alt} width="800" height="500"/>
            </div>
        </div>

    );

}

export default Project;