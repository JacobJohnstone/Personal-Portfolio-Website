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

const ProjectCollection = () => {
    return (
        <div className="relative w-fit h-fit mt-20">
            <div className="relative z-40">
                <p className="text-sky-500 blur-[20px] w-screen text-center text-7xl animate-signGlow">
                    Projects
                </p>
                <div className="absolute top-0 z-20 w-fit">
                    <p className="text-center blur-[4px] text-sky-300 text-7xl w-screen animate-signGlow">
                        Projects
                    </p>
                </div>
                <div className="absolute top-0 z-20 w-fit">
                    <p className="text-center text-titleFinal text-7xl w-screen drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Projects
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-16">
                <div className="flex-block w-2/3">
                    <Project
                        title="Image Translation for Medical Students"
                        description="Created an image translation program to be used for medical students in training, enhancing their training by allowing them to view a more realistic version when practicing mitral valve surgery procedures"
                        features={[
                            "Translated plastic, model heart images into realistic looking heart images",
                            "Implemented rapid image translation allowing rapid streaming from a camera",
                        ]}
                        featureImages={[pointers, backend]}
                        technologyIcons={[python, pytorch]}
                    />
                    <Project
                        title="Relational Database Design and Implementation"
                        description="Created and designed a relational database. The focus was on the implementation and functionality of the database rather than the front-end design. Within the group, I was in charge of putting together the front end pages and completing the 'Member Info' page, as well as assisting the design and connection of the database"
                        features={[
                            "Relational database designed and implemented to be normalized (ER Picture)",
                            "Member Info provides all the information connected to the member requestsed, such as the class sessions they will be attending and what classes (offerings) they are a part of",
                            "Able to track member statistics such as workout frequencies and class registrations enabling more business decision to be made more effectively",
                            "Made use of an Express backend used to manage queries and responses to and from the databse",
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
