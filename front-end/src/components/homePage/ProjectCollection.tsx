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
import modelSetup from "../../images/modelDisplay.jpeg";

const ProjectCollection = () => {
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
                        description="Created an image translation program to be used for medical students in training, enhancing their training by allowing them to view a more realistic version when practicing mitral valve surgery procedures"
                        features={[
                            "Translated images taken of a plastic model heart into realistic heart images",
                            "Implemented streamed image translation allowing rapid, continual translation for a camera",
                        ]}
                        featureImages={[modelSetup, backend]}
                        technologyIcons={[python, pytorch, linux]}
                    />
                    <Project
                        title="Relational Database Design and Implementation"
                        description="Created and designed a relational database. The focus was on the implementation and functionality of the database rather than the front-end design. Within the group, I was in charge of putting together the front end pages and completing the 'Member Info' page, as well as assisting the design and connection of the database"
                        features={[
                            "Relational database designed and implemented to be normalized (ER Picture)",
                            "Member Info provides all the information connected to the member requested, such as the class sessions they're attending and what classes (offerings) they're a part of",
                            "Able to track member statistics such as workout frequencies and class registrations",
                            "Made use of an Express backend used to manage queries and responses to and from the database",
                        ]}
                        featureImages={[ER, pointers, backend]}
                        technologyIcons={[
                            nodeJS,
                            express,
                            reactIcon,
                            bootStrap,
                            sqlIcon,
                            restAPI,
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectCollection;
