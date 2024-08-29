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
        <div className="my-10 bg-gray-800 p-10 rounded-3xl bg-opacity-50">
            <div className="text-titleFinal text-center text-4xl mb-5 font-mono">
                {title}
            </div>
            <div className="text-gray-400 text-center text-2xl my-5">
                {description}
            </div>
            <div className="flex justify-between items-center h-fit p-5 text-gray-500">
                <div className="flex justify-start relative items-center w-1/2 bg-gray-800 rounded-3xl">
                    <ul className="mr-2 h-60 p-3 overflow-y-scroll no-scrollbar flex-block justify-center">
                        {features.map((feature, i) => (
                            <li
                                key={i}
                                onClick={(e) => handleFeatureClick(i)}
                                className="bg-blue-700 bg-opacity-80 text-titleFinal bg-opacity-50 h-fit w-fit p-5 my-3 rounded-3xl cursor-pointer py-5"
                            >
                                <ProjectFeature name={features[i]} />
                            </li>
                        ))}
                    </ul>
                    <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-gray-800 to-transparent z-40 rounded-xl"></div>
                </div>
                <div className="flex justify-center items-center w-1/2 h-60 ml-2">
                    <img
                        src={image}
                        className="max-h-full rounded-3xl"
                        alt={alt}
                    />
                </div>
            </div>
        </div>
    );
};

export default Project;
