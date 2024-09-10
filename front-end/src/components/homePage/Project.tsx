import ProjectFeature from "./ProjectFeature";
import loading from "../../images/loading.gif";
import defaultDatabase from "../../images/DatabaseIcon.png";
import { useEffect, useRef, useState } from "react";
import express from "../../images/express.png";
import arrow from "../../images/arrow.png";
import leftArrow from "../../images/leftArrow.png";

type ProjectProps = {
    title: string;
    description: string;
    features: string[];
    featureImages: string[];
    technologyIcons: string[];
};

const Project = ({
    title,
    features,
    description,
    featureImages,
    technologyIcons,
}: ProjectProps) => {
    const [image, setImage] = useState(loading);
    const [alt, setAlt] = useState("Loading...");
    const [icon, setIcon] = useState(loading);
    const iconDivRef = useRef<HTMLDivElement>(null);
    const scrollBtnRef = useRef<HTMLImageElement>(null);
    const [isOverflowing, setIsOverflowing] = useState<boolean>(true);
    const [isScrolledRight, setIsScrolledRight] = useState<boolean>(false);
    const [isScrolledLeft, setIsScrolledLeft] = useState<boolean>(true);

    useEffect(() => {
        setImage(defaultDatabase); // title image
        showScrollArrow();
        window.addEventListener("resize", showScrollArrow);
    }, [title]);

    function showScrollArrow() {
        if (iconDivRef.current) {
            const { scrollWidth, clientWidth, scrollLeft } = iconDivRef.current;
            setIsOverflowing(scrollWidth > clientWidth);
        }
    }

    function handleScrollLeft() {
        if (iconDivRef.current) {
            iconDivRef.current.scrollTo({
                left: iconDivRef.current.scrollLeft - 300,
                behavior: "smooth",
            });
            const { clientWidth, scrollWidth, scrollLeft } = iconDivRef.current;
            //const scrolledToRight = scrollLeft + clientWidth >= scrollWidth;
            setIsScrolledRight(false);
            const scrolledToLeft = scrollLeft - 300 <= 0;
            setIsScrolledLeft(scrolledToLeft);
        }
    }

    function handleFeatureClick(index: number) {
        setImage(featureImages[index]);
        setAlt(features[index]);
    }

    function handleScrollRight() {
        //useRef, scroll div
        if (iconDivRef.current) {
            iconDivRef.current.scrollTo({
                left: iconDivRef.current.scrollLeft + 300, // Adjust the value as needed
                behavior: "smooth",
            });
            const { scrollWidth, clientWidth, scrollLeft } = iconDivRef.current;
            const scrolledToRight =
                scrollLeft + 300 + clientWidth >= scrollWidth;
            setIsScrolledRight(scrolledToRight);
            setIsScrolledLeft(false);
        }
    }

    return (
        <div className="my-10 bg-gray-800 p-10 rounded-3xl w-full">
            <div className="text-titleFinal text-center text-4xl mb-5 font-mono">
                {title}
            </div>
            <div className="text-gray-400 text-center text-2xl my-5">
                {description}
            </div>
            <div className="flex justify-between items-center h-fit p-5 text-gray-500">
                <div className="flex-block justify-start relative items-center w-1/2">
                    <div className="text-2xl text-titleFinal font-mono pl-3">
                        Features
                    </div>
                    <ul className="mr-2 h-60 p-3 overflow-y-scroll no-scrollbar bg-gray-800 rounded-3xl flex-block justify-center w-full">
                        {features.map((feature, i) => (
                            <li
                                key={i}
                                onClick={(e) => handleFeatureClick(i)}
                                className="bg-blue-700 bg-opacity-80 text-titleFinal bg-opacity-50 h-fit w-fit px-3 my-2 rounded-3xl cursor-pointer py-2 hover:bg-sky-500 transition duration-500 linear"
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
            <div className="flex justify-center items-center">
                {isOverflowing && !isScrolledLeft ? (
                    <img
                        alt="left arrow"
                        src={leftArrow}
                        onClick={handleScrollLeft}
                        className="relative left-0 p-5 mt-8 circle-gradient-bg rounded-3xl h-14 cursor-pointer animate-fadeIn"
                    />
                ) : (
                    <img
                        src={leftArrow}
                        className="opacity-0 h-16 p-5 rounded 3xl relative left-0"
                    />
                )}
                <div
                    ref={iconDivRef}
                    className="relative flex h-16 w-fit max-w-full mt-8 justify-start bg-gradient-to-l from-gray-400 via-gray-100 to-gray-400 rounded-3xl items-center object-contain overflow-x-scroll no-scrollbar"
                >
                    {technologyIcons.map((technology, i) =>
                        technology == express ? (
                            <img
                                key={i}
                                src={technology}
                                className="max-h-full py-5 px-5"
                            />
                        ) : (
                            <img
                                key={i}
                                src={technology}
                                className="max-h-full py-2 px-5"
                            />
                        )
                    )}
                </div>
                {isOverflowing && !isScrolledRight ? (
                    <img
                        alt="arrow"
                        ref={scrollBtnRef}
                        src={arrow}
                        className="relative right-0 p-5 mt-8 circle-gradient-bg rounded-3xl h-14 cursor-pointer animate-fadeIn"
                        onClick={handleScrollRight}
                    />
                ) : (
                    <img
                        src={arrow}
                        className="h-16 p-5 rounded-3xl opacity-0 relative right-0"
                    />
                )}
            </div>
        </div>
    );
};

export default Project;
