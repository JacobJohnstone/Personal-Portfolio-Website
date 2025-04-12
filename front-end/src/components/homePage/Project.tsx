import ProjectFeature from "./ProjectFeature";
import loading from "../../images/loading.gif";
import defaultDatabase from "../../images/DatabaseIcon.png";
import { useEffect, useRef, useState } from "react";
import express from "../../images/express.png";
import arrow from "../../images/arrow.png";
import leftArrow from "../../images/leftArrow.png";
import heartIcon from "../../images/heartIcon.png";
import pokeball from "../../images/pokeball-icon.png";
import musicAppIcon from "../../images/headphoneIcon.webp";
import githubIcon from "../../images/githubIcon.png";
import titleScreen from "../../images/title-screen.png";
import orionNebula from "../../images/orion-nebula.png";

type ProjectProps = {
    title: string;
    description: string;
    features: string[];
    featureImages: string[];
    technologyIcons: string[];
    gitLink?: string;
    otherLink?: string;
};

const Project = ({
    title,
    features,
    description,
    featureImages,
    technologyIcons,
    gitLink,
    otherLink,
}: ProjectProps) => {
    const [image, setImage] = useState(loading);
    const [alt, setAlt] = useState("Loading...");
    const iconDivRef = useRef<HTMLDivElement>(null);
    const scrollBtnRef = useRef<HTMLImageElement>(null);
    const [isOverflowing, setIsOverflowing] = useState<boolean>(true);
    const [isScrolledRight, setIsScrolledRight] = useState<boolean>(false);
    const [isScrolledLeft, setIsScrolledLeft] = useState<boolean>(true);

    useEffect(() => {
        if (title == "Image Translation for Medical Students") {
            setImage(heartIcon); // title image
        } else if (title == "Simple Pokedex") {
            setImage(pokeball);
        } else if (title == "Music Web App") {
            setImage(musicAppIcon);
        } else if (title == "Haunting Grounds - Pirate Software Game Jam") {
            setImage(titleScreen);
        } else if (title === "Astrophotography Portfolio") {
            setImage(orionNebula);
        } else {
            setImage(defaultDatabase);
        }
        showScrollArrow();
        window.addEventListener("resize", showScrollArrow);
    }, [title]);

    function showScrollArrow() {
        if (window.innerWidth < 500) {
            setIsOverflowing(false);
        } else if (iconDivRef.current) {
            const { scrollWidth, clientWidth } = iconDivRef.current;
            setIsOverflowing(scrollWidth > clientWidth);
        }
    }

    function handleScrollLeft() {
        if (iconDivRef.current) {
            iconDivRef.current.scrollTo({
                left: iconDivRef.current.scrollLeft - 100,
                behavior: "smooth",
            });
            const { scrollLeft } = iconDivRef.current;
            setIsScrolledRight(false);
            const scrolledToLeft = scrollLeft - 100 <= 0;
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
                left: iconDivRef.current.scrollLeft + 100, // Adjust the value as needed
                behavior: "smooth",
            });
            const { scrollWidth, clientWidth, scrollLeft } = iconDivRef.current;
            const scrolledToRight =
                scrollLeft + 100 + clientWidth >= scrollWidth;
            setIsScrolledRight(scrolledToRight);
            setIsScrolledLeft(false);
        }
    }

    return (
        <div className="my-10 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 p-5 rounded-3xl w-full border-4 border-gray-400">
            <div className="text-titleFinal text-center text-2xl md:text-3xl lg:text-4xl mt-3 mb-3 font-semibold font-mono drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pb-4 border-b-2 border-gray-500">
                {title}
            </div>

            <div className="text-gray-300 text-center text-md md:text-lg lg:text-xl">
                {description}
            </div>
            <div className="flex justify-center items-center">
                {isOverflowing && !isScrolledLeft ? (
                    <img
                        alt="left arrow"
                        src={leftArrow}
                        onClick={handleScrollLeft}
                        className="relative left-0 p-5 mt-3 mb-3 md:mb-0 circle-gradient-bg rounded-3xl h-14 cursor-pointer animate-fadeIn"
                    />
                ) : (
                    <></>
                )}
                <div
                    ref={iconDivRef}
                    className="relative w-full flex h-[4rem] xs:h-16 mt-3 mb-3 md:mb-0 xs:w-fit max-w-full justify-start bg-gradient-to-l from-gray-400 via-white to-gray-400 rounded-3xl items-center object-contain overflow-x-scroll overflow-y-hidden no-scrollbar">
                    {technologyIcons.map((technology, i) =>
                        technology == express ? (
                            <img
                                key={i}
                                src={technology}
                                className="h-[3rem] xs:h-full w-fit my-8 px-2 xs:my-0 py-2 xs:py-5 xs:px-5"
                            />
                        ) : (
                            <img
                                key={i}
                                src={technology}
                                className="h-[3rem] xs:h-full w-fit my-8 px-2 xs:my-0 xs:py-2 xs:px-5"
                            />
                        )
                    )}
                </div>
                {isOverflowing && !isScrolledRight ? (
                    <img
                        alt="arrow"
                        ref={scrollBtnRef}
                        src={arrow}
                        className="relative right-0 p-5 mt-3 mb-3 md:mb-0 circle-gradient-bg rounded-3xl h-14 cursor-pointer animate-fadeIn"
                        onClick={handleScrollRight}
                    />
                ) : (
                    <></>
                )}
            </div>
            <div className="flex-block md:flex items-center h-fit text-gray-500">
                <div className="flex justify-start items-start md:w-1/2 lg:h-[25rem] sm:mt-4">
                    <div className="flex-block relative mb-2">
                        <div className="text-lg sm:text-xl md:text-2xl text-titleFinal font-mono pl-3">
                            Features
                        </div>
                        <ul className="relative mr-2 max-h-[20rem] p-3 overflow-y-scroll no-scrollbar bg-gray-800 rounded-3xl flex-block justify-center w-full">
                            {features.map((feature, i) => (
                                <li
                                    key={i}
                                    onClick={(e) => handleFeatureClick(i)}
                                    className="bg-blue-700 bg-opacity-80 text-titleFinal text-sm lg:text-base h-fit w-full px-3 my-2 rounded-3xl cursor-pointer py-2 hover:bg-sky-600 transition duration-500 linear">
                                    <ProjectFeature name={features[i]} />
                                </li>
                            ))}
                        </ul>
                        <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-gray-800 to-transparent z-40 rounded-3xl"></div>
                    </div>
                </div>

                <div className="relative flex justify-center items-center md:w-1/2 mb-2 md:mt-0 h-[20rem] md:ml-5 bg-white p-5 rounded-3xl">
                    <img src={image} className="max-h-full" alt={alt} />
                </div>
            </div>

            {gitLink && (
                <div className="flex justify-center h-14">
                    <a
                        href={gitLink}
                        target="_blank"
                        className="flex justify-center">
                        <img
                            className="max-h-full bg-gray-400 rounded-full mt-12 md:mt-0 p-1 cursor-pointer hover:bg-white transition duration-500 linear"
                            src={githubIcon}
                        />
                    </a>
                </div>
            )}
            {otherLink && (
                <div className="flex justify-center h-14">
                    <a
                        href={otherLink}
                        target="_blank"
                        className="flex justify-center">
                        <p className="text-white font-bold bg-gray-600 hover:bg-gray-400 transition duration-500 linear flex justify-center items-center p-5 rounded-xl">
                            VIEW
                        </p>
                    </a>
                </div>
            )}
        </div>
    );
};

export default Project;
