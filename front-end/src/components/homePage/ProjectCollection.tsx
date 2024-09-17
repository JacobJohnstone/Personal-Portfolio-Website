import Project from "./Project";
import pointers from "../../images/PointerPictures.jpg";
import ER from "../../images/ER-Design.png";
import backend from "../../images/PreviousSessionsBackendCode.png";
import bootStrap from "../../images/Bootstrap_logo.png";
import express from "../../images/express.png";
import mongoDB from "../../images/MongoDB-Logo.png";
import nodeJS from "../../images/nodejs-1-logo-png-transparent.png";
import python from "../../images/Python_logo_01.png";
import reactIcon from "../../images/react.png";
import sqlIcon from "../../images/Sql_data_base_with_logo.png";
import pytorch from "../../images/Pytorch.png";
import restAPI from "../../images/rest-api-icon.png";
import linux from "../../images/linuxIcon.png";
import javascript from "../../images/javascriptIcon.png";
import git from "../../images/git-icon.png";
import aws from "../../images/aws-icon.webp";
import html from "../../images/html-icon.webp";
import cssIcon from "../../images/css-icon.png";
import Cuda from "../../images/CUDAIcon.png";
import insomniaIcon from "../../images/insomnia-icon.png";
import fireBaseIcon from "../../images/firebaseIcon.webp";
import MusicLanding from "../../images/MusicLanding.jpg";
import MusicAdmin from "../../images/Admin.jpg";
import MusicUser from "../../images/User-home.jpg";
import musicPwdChange from "../../images/password-change.jpg";
import musicPlayable from "../../images/Track-playable.jpg";
import musicPublicPlaylists from "../../images/public-playlists.jpg";
import musicSignin from "../../images/Sign-in.jpg";
import musicSearch from "../../images/MusicSearch.gif";
import modelSetup from "../../images/modelDisplay.jpeg";
import instructors from "../../images/instructor-levels.png";
import model from "../../images/modelImage.jpg";
import modelHeart2 from "../../images/modelHeart2.jpg";
import pokedex from "../../images/Pokedex.jpg";
import pokedexBoundary from "../../images/Pokedex-boundary.jpg";
import pokedexSearch from "../../images/Pokedex-number.jpg";
import { useState } from "react";

const ProjectCollection = () => {
    const [seeAllProjects, setSeeAllProjects] = useState<boolean>(false);
    const [seeAllProjectsBtn, setSeeAllProjectsBtn] = useState<boolean>(true);
    useState<boolean>(false);

    // for hiding/displaying extra projects
    function handleMoreProjects() {
        setSeeAllProjects(!seeAllProjects);
        setSeeAllProjectsBtn(!seeAllProjectsBtn);
    }

    return (
        <div className="relative w-screen h-fit mt-10">
            <div className="relative z-40">
                <p className="text-sky-500 blur-[20px] w-screen text-center text-5xl sm:text-6xl lg:text-7xl animate-signGlow">
                    Projects
                </p>
                <div className="absolute top-0 z-20 w-fit">
                    <p className="text-center blur-[4px] text-sky-300 text-5xl sm:text-6xl lg:text-7xl w-screen animate-signGlow">
                        Projects
                    </p>
                </div>
                <div className="absolute top-0 z-20 w-fit">
                    <p className="text-center text-titleFinal text-5xl sm:text-6xl lg:text-7xl w-screen drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Projects
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <div className="flex-block w-5/6 xs:w-2/3">
                    <Project
                        title="Image Translation for Medical Students"
                        description="Created an image translation program to be used for medical students in training, enhancing their practice by creating a more realistic visual for simulated mitral valve surgery procedures. The images displayed only show the artificial heart valve before AI translations."
                        features={[
                            "Translated images taken of a plastic model heart into realistic heart images",
                            "Implemented streamed image translation allowing rapid, continual translation for a camera",
                            "Displayed results using OpenCV, achieving up to 10 frames per second",
                        ]}
                        featureImages={[modelSetup, model, modelHeart2]}
                        technologyIcons={[python, pytorch, git, linux, Cuda]}
                    />
                    <Project
                        title="Relational Database Design and Implementation"
                        description="Created and designed a relational database. The focus was on the implementation and functionality of the database rather than the front-end design. Within the group, I was in charge of putting together the front end pages and completing the 'Member Info' page, as well as assisting the design and connection of the database"
                        features={[
                            "Relational database designed and implemented to be normalized (ER Picture)",
                            "Member Info provides all the information connected to the member requested, such as the class sessions they're attending and what classes (offerings) they're a part of",
                            "Able to track member statistics such as workout frequencies and class registrations, as well as get available instructors by skill level",
                            "Made use of an Express backend used to manage queries and responses to and from the database",
                        ]}
                        featureImages={[ER, pointers, instructors, backend]}
                        technologyIcons={[
                            nodeJS,
                            express,
                            reactIcon,
                            bootStrap,
                            sqlIcon,
                            restAPI,
                            git,
                        ]}
                        gitLink="https://github.com/Jacob-13/Gym-Database-Management-System"
                    />
                    {seeAllProjectsBtn && (
                        <div>
                            <div className="relative h-64 xs:h-96 overflow-hidden -top-10">
                                <Project
                                    title="Music Web App"
                                    description="A music web application built with an express back-end supported by firebase and a react front-end. Users can sign-up, manage their accounts, and create playlists from the available music data."
                                    features={[
                                        "Has a landing page that includes a welcome message and public playlists created by other users",
                                        "Includes a public playlist section that displays playlists that have been created by others users and have the public flag",
                                        "Implemented user authentication and authorization using firebase that ensures input validation for emails and strong password recommendations",
                                        "Login brings users to their home page where they can create/modify playlists and search for songs",
                                        "Includes dynamic search results while looking for different tracks",
                                        "Each search result includes a dropdown option that includes a play button, bringing them to YouTube with search results for the specified track",
                                        "Users can also logout and are able to change their password if they wish",
                                        "The admin accounts created to add other admins as well as remove users",
                                    ]}
                                    featureImages={[
                                        MusicLanding,
                                        musicPublicPlaylists,
                                        musicSignin,
                                        MusicUser,
                                        musicSearch,
                                        musicPlayable,
                                        musicPwdChange,
                                        MusicAdmin,
                                    ]}
                                    technologyIcons={[
                                        git,
                                        fireBaseIcon,
                                        express,
                                        reactIcon,
                                        insomniaIcon,
                                        nodeJS,
                                        restAPI,
                                        aws,
                                    ]}
                                />
                                <div className="absolute bottom-0 w-full h-64 xs:h-96 bg-gradient-to-t from-gray-950 to-transparent"></div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div
                                    className="relative bottom-6 w-fit bg-gray-800 rounded-3xl cursor-pointer pb-1 px-2 hover:bg-gray-600 transition duration-300 linear"
                                    onClick={handleMoreProjects}
                                >
                                    <p className="text-2xl text-titleFinal">
                                        See More Projects
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    {seeAllProjects && (
                        <div>
                            <Project
                                title="Music Web App"
                                description="A music web application built with an express back-end supported by firebase and a react front-end. Users can sign-up, manage their accounts, and create playlists from the available music data."
                                features={[
                                    "Has a landing page that includes a welcome message and public playlists created by other users",
                                    "Includes a public playlist section that displays playlists that have been created by others users and have the public flag",
                                    "Implemented user authentication and authorization using firebase that ensures input validation for emails and strong password recommendations",
                                    "Login brings users to their home page where they can create/modify playlists and search for songs",
                                    "Includes dynamic search results while looking for different tracks",
                                    "Each search result includes a dropdown option that includes a play button, bringing them to YouTube with search results for the specified track",
                                    "Users can also logout and are able to change their password if they wish",
                                    "The admin accounts created to add other admins as well as remove users",
                                ]}
                                featureImages={[
                                    MusicLanding,
                                    musicPublicPlaylists,
                                    musicSignin,
                                    MusicUser,
                                    musicSearch,
                                    musicPlayable,
                                    musicPwdChange,
                                    MusicAdmin,
                                ]}
                                technologyIcons={[
                                    git,
                                    fireBaseIcon,
                                    express,
                                    reactIcon,
                                    insomniaIcon,
                                    nodeJS,
                                    restAPI,
                                    aws,
                                ]}
                                gitLink="https://github.com/Jacob-13/Music-Web-Application"
                            />
                            <Project
                                title="Simple Pokedex"
                                description="Created a small pokedex using vanilla JavaScript, HTML, and CSS enableing users to search for a pokemon. Search results provide extra information such as rarity."
                                features={[
                                    "Displays the first 20 pokemon in the pokedex with they index and name",
                                    "Allows users to search for pokemon and displays an alert with the search results",
                                    "Implemented input validation to ensure name search only contains alphabetical characters and number search is within the boundaries",
                                ]}
                                featureImages={[
                                    pokedex,
                                    pokedexSearch,
                                    pokedexBoundary,
                                ]}
                                technologyIcons={[
                                    html,
                                    cssIcon,
                                    javascript,
                                    git,
                                    aws,
                                ]}
                                gitLink="https://github.com/Jacob-13/se3316-lab1-jjohn483"
                            />
                            <div className="flex justify-center items-center">
                                <div
                                    className="w-fit bg-gray-700 rounded-3xl cursor-pointer pb-1 px-2 hover:bg-gray-500 transition duration-300 linear"
                                    onClick={handleMoreProjects}
                                >
                                    <p className="text-2xl text-titleFinal">
                                        Hide More Projects
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCollection;
