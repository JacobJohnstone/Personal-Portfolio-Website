import ProjectFeature from "./ProjectFeature";
import loading from "../../images/loading.gif";
import defaultDatabase from "../../images/DatabaseIcon.png";
import { useEffect, useState } from "react";

type ProjectProps = {
    title: string;
    description: string;
    features: string[];
    featureImages: string[];
};

const Project = ({
    title,
    features,
    description,
    featureImages,
}: ProjectProps) => {
    const [image, setImage] = useState(loading);
    const [alt, setAlt] = useState("Loading...");

    useEffect(() => {
        setImage(defaultDatabase); // title image
    }, [title]);

    function handleFeatureClick(index: number) {
        setImage(featureImages[index]);
        setAlt(features[index]);
    }

    return (
        <div className="my-10">
            <div className="text-titleFinal text-4xl mb-5 font-mono">
                {title}
            </div>
            <div className="text-gray-300 text-2xl">{description}</div>
            <div className="flex bg-gray-500 text-gray-500">
                <div className="flex justify-start">
                    <ul className="">
                        {features.map((feature, i) => (
                            <li
                                key={i}
                                onClick={(e) => handleFeatureClick(i)}
                                className="bg-gray-700 bg-opacity-50 h-fit w-fit p-5 my-3 rounded-3xl cursor-pointer">
                                <ProjectFeature name={features[i]} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-end">
                    <img src={image} alt={alt} />
                </div>
            </div>
        </div>
    );
};

export default Project;
