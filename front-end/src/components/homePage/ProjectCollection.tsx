import Project from "./Project";
import pointers from "../../images/PointerPictures.jpg";
import ER from "../../images/ER-Design.png";
import bootStrap from "../../images/Bootstrap_logo.png";
import express from "../../images/express.png";
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
import musicPlayable from "../../images/Track-playable.jpg";
import musicSignin from "../../images/Sign-in.jpg";
import musicSearch from "../../images/MusicSearch.gif";
import modelSetup from "../../images/modelDisplay.jpeg";
import instructors from "../../images/instructor-levels.png";
import model from "../../images/modelImage.jpg";
import modelHeart2 from "../../images/modelHeart2.jpg";
import pokedex from "../../images/Pokedex.jpg";
import pokedexBoundary from "../../images/Pokedex-boundary.jpg";
import pokedexSearch from "../../images/Pokedex-number.jpg";
import hauntingGrounds from "../../images/gameplay_1.png";
import libraryGrounds from "../../images/libraryGameplay_1.png";
import unityIcon from "../../images/Unity-icon.png";
import CSharp from "../../images/c-sharp-icon.png";
import asepriteIcon from "../../images/aseprite-icon.png";
import flStudio from "../../images/FL_Studio_11_icon.webp";
import astroHome from "../../images/astronomy-home.png";
import astroGallery from "../../images/astro-gallery.png";
import astroAdmin from "../../images/astro-admin-panel.png";
import nextJS from "../../images/nextjs-icon.png";
import typescriptIcon from "../../images/typescript-icon.png";
import neonDBIcon from "../../images/neon-db-icon.png";
import androidStudioIcon from "../../images/android-studio-png.png";
import explorePage from "../../images/couples-explore-page.png";
import messagesPage from "../../images/couples-messages-page.png";
import dateIdeas from "../../images/couples-date-ideas.png";
import loveNote from "../../images/couples-love-note.png";
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
                <p className="text-sky-300 blur-[8px] w-screen text-center text-5xl sm:text-6xl lg:text-7xl animate-signGlow">
                    Projects
                </p>
                <div className="absolute top-0 z-20 w-fit">
                    <p className="text-center blur-[4px] text-blue-500 text-5xl sm:text-6xl lg:text-7xl w-screen animate-signGlow">
                        Projects
                    </p>
                </div>
                <div className="absolute top-0 z-20 w-fit">
                    <p className="text-center text-titleFinal text-5xl sm:text-6xl lg:text-7xl w-screen drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Projects
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-0 md:mt-3">
                <div className="flex-block w-5/6 xs:w-2/3">
                    <Project
                        title="React Native Couple's App"
                        description="An app for couples to connect and come closer to one another!"
                        features={[
                            "Connects users to their partners allowing them to answer questions and play games that attempt to dig deeper into the relationship",
                            "Each user can upload memories to look back on and remember their adventures together",
                            "There are a list of date ideas that users can scroll through. Each date idea comes with a checklist of required resources (e.g., paint for a painting date) and the ability to set the completion status",
                            "Partners can send love notes to each other as a surprise when opening the app",
                        ]}
                        featureImages={[
                            explorePage,
                            messagesPage,
                            dateIdeas,
                            loveNote,
                        ]}
                        technologyIcons={[
                            git,
                            nodeJS,
                            reactIcon,
                            aws,
                            typescriptIcon,
                            fireBaseIcon,
                            androidStudioIcon,
                        ]}
                    />
                    <Project
                        title="Astrophotography Portfolio"
                        description="A beautiful gallery display for an astrophotographer. Includes an admin panel for easy upload, edit, and removal of images."
                        features={[
                            "Includes nicely styled home, about, and gallery pages",
                            "Displays all images in the gallery allowing the photographer to pin favourite images at the top",
                            "The admin panel allows full control over naming, types, and the images uploaded",
                        ]}
                        featureImages={[astroHome, astroGallery, astroAdmin]}
                        technologyIcons={[
                            git,
                            nodeJS,
                            reactIcon,
                            sqlIcon,
                            neonDBIcon,
                            aws,
                            typescriptIcon,
                            nextJS,
                        ]}
                        otherLink="https://astronomy-portfolio.vercel.app/"
                    />
                    <Project
                        title="Haunting Grounds - Pirate Software Game Jam"
                        description="A strategy stealth game made with Unity, C#, Aseprite, and FL Studio, following the theme YOU ARE THE WEAPON. Submitted haunting grounds in the pirate software game jam."
                        features={[
                            "Game mechanics include interacting, invisibility, sanity levels, time of day, and flashlight damage",
                            "Controls: WASD/Arrow keys to move, Q for invisibility, E for interacting, and M for the instructions menu",
                        ]}
                        featureImages={[hauntingGrounds, libraryGrounds]}
                        technologyIcons={[
                            unityIcon,
                            CSharp,
                            asepriteIcon,
                            flStudio,
                            git,
                        ]}
                        gitLink="https://github.com/JacobJohnstone/piratesoftware-gamejam16-polished"
                    />
                    <Project
                        title="Image Translation for Medical Students"
                        description="Created an image translation program to be used for medical students in training, enhancing their practice by creating a more realistic visual for simulated mitral valve surgery procedures. The images displayed only show the artificial heart valve before AI translations."
                        features={[
                            "Translated images taken of an artificial model heart into realistic heart images",
                            "Implemented streamed image translation allowing rapid, continual translation for a camera",
                            "Displayed results using OpenCV, achieving up to 10 frames per second",
                        ]}
                        featureImages={[modelSetup, model, modelHeart2]}
                        technologyIcons={[python, pytorch, git, linux, Cuda]}
                    />
                    {seeAllProjects && (
                        <Project
                            title="Relational Database Design and Implementation"
                            description="Designed and implemented a relational database focused on gym services. I completed the 'Member Info' UI and connected all pages."
                            features={[
                                "Created a relational database, designed and implemented to be normalized",
                                "Member Info provides all information connected to the specific member requested",
                                "Able to track member statistics and find available instructors sorted by skill level",
                            ]}
                            featureImages={[ER, pointers, instructors]}
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
                    )}
                    {seeAllProjectsBtn && (
                        <div>
                            <div className="relative h-64 xs:h-96 overflow-hidden -top-10">
                                <Project
                                    title="Relational Database Design and Implementation"
                                    description="Designed and implemented a relational database focused on gym services. I completed the 'Member Info' UI and connected all pages."
                                    features={[
                                        "Created a relational database, designed and implemented to be normalized",
                                        "Member Info provides all information connected to the specific member requested",
                                        "Able to track member statistics and find available instructors sorted by skill level",
                                    ]}
                                    featureImages={[ER, pointers, instructors]}
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
                                <div className="absolute bottom-0 w-full h-64 xs:h-96 bg-gradient-to-t from-gray-950 to-transparent"></div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div
                                    className="relative bottom-6 w-fit bg-gray-800 rounded-3xl cursor-pointer pb-1 px-2 hover:bg-gray-600 transition duration-300 linear"
                                    onClick={handleMoreProjects}>
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
                                description="A music web application where users can sign-up, manage their accounts, and create playlists from the available music data."
                                features={[
                                    "Has a landing page with public playlists created by other users",
                                    "Implemented user authentication and authorization with input validation",
                                    "Home page allows users to create/modify playlists and search for songs",
                                    "Includes dynamic search results",
                                    "Each result includes a play button, bringing the user to YouTube",
                                    "The admin accounts created to add other admins as well as remove users",
                                ]}
                                featureImages={[
                                    MusicLanding,
                                    musicSignin,
                                    MusicUser,
                                    musicSearch,
                                    musicPlayable,
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
                                    "Displays the first 20 pokemon in the pokedex",
                                    "Allows users to search for each pokemon by number or name",
                                    "Implemented input validation",
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
                                    onClick={handleMoreProjects}>
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
