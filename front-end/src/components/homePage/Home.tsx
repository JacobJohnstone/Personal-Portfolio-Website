//import { useEffect, useState } from "react";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import pointers from "../../images/PointerPictures.jpg";
import ER from "../../images/ER-Design.png";
import backend from "../../images/PreviousSessionsBackendCode.png";
import bootStrap from "../../images/Bootstrap_logo.png";
import express from "../../images/express.png";
import mongoDB from "../../images/MongoDB-Logo.png";
import nodeJS from "../../images/Nodejs.png";
import python from "../../images/python.png";
import reactIcon from "../../images/react.png";
import sqlIcon from "../../images/Sql_data_base_with_logo.png";
import pytorch from "../../images/Pytorch.png";

const Home = () => {
    //const [count, setCount] = useState(0);

    // useEffect(() => {                               // this function runs when the component is loaded, or when the state of the component changes
    //     setCount(count + 1);

    //     return () => alert('goodbye components');   // the function being returned runs when the component is destroyed/removed from the ui AKA: teardown function
    // }, [count]);                                    // dependency array contains count, means this function will be called anytime count changes

    return (
        <div className="h-screen flex text-gray-500 bg-gray-800">
            <div className="flex justify-center items-center h-screen w-screen">
                <div className="fixed bg-largeEclipse rounded-full w-screen h-screen blur-3xl sm:blur-[176px] bg-opacity-20"></div>
                <div className="fixed bg-smallEclipse rounded-full w-1/2 h-3/5 blur-3xl sm:blur-[234px] bg-opacity-30 z-20"></div>
            </div>
            <div className="absolute flex items-center justify-center w-screen h-screen">
                <div
                    className={
                        "absolute top-20 w-fit text-titleFinal text-4xl sm:text-5xl md:text-8xl lg:text-9xl lg:tracking-wider font-light font-mono z-40"
                    }
                >
                    JACOB JOHNSTONE
                </div>
            </div>
            <div className="absolute flex items-center justify-center w-screen h-screen">
                <div
                    className={
                        "absolute top-20 z-30 w-fit blur-[2px] text-purple-400 text-4xl sm:text-5xl md:text-8xl lg:text-9xl lg:tracking-wider font-bold font-mono"
                    }
                >
                    JACOB JOHNSTONE
                </div>
            </div>
            <div className="absolute flex items-center justify-center w-screen h-screen">
                <div
                    className={
                        "absolute top-20 z-30 w-fit blur-[20px] text-purple-500 text-4xl sm:text-5xl md:text-8xl lg:text-9xl lg:tracking-wider font-bold font-mono"
                    }
                >
                    JACOB JOHNSTONE
                </div>
            </div>
            <div className="absolute top-full z-40">
                <h3 className="bg-red-200">B.E.Sc</h3>
                <div className="bg-red-200">
                    <About />
                </div>

                <div className="bg-red-200">
                    <h2 className="">SKILLS</h2>
                    <div>
                        <Skill
                            title="Software Development"
                            description="Best practices, OOP, Version control:Java, JavaScript, Typescript, Python"
                        />
                    </div>
                    <div>
                        <Skill
                            title="Fullstack Development"
                            description="Web applications built with HTML, CSS, JS, and React : Supported by RESTful APIs, Express backends, and both relational and NoSQL databases"
                        />
                    </div>
                    <div>
                        <Skill
                            title="AI Driven Solutions"
                            description="Taking advantage of PyTorch, advancing steps within the field of healthcare"
                        />
                    </div>
                </div>
                <div className="bg-red-200">
                    <h2>PROJECTS</h2>
                    <Project
                        title="PROJECT 1 - Image Translation for Medical Students"
                        description="Created an image translation program to be used for medical students in training, enhancing their training by allowing them to view a more realistic version when practicing mitral valve surgery procedures"
                        features={[
                            "Translated plastic, model heart images into realistic looking heart images",
                            "Implemented rapid image translation allowing rapid streaming from a camera",
                        ]}
                        featureImages={[pointers, backend]}
                        technologyIcons={[
                            nodeJS,
                            express,
                            bootStrap,
                            reactIcon,
                            sqlIcon,
                        ]}
                    />
                    <Project
                        title="PROJECT 2 - Relational Database Design and Implementation"
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
                            bootStrap,
                            reactIcon,
                            sqlIcon,
                        ]}
                    />
                </div>
                <div className="bg-red-200">
                    <h4>TECHNOLOGIES USED IN THIS PORTFOLIO</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Typescript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="bg-red-200">
                    <h2>Education</h2>
                    <h4>The University of Western Ontario</h4>
                    <div>September 2020 - April 2024</div>
                    <h5>Relevant Coursework</h5>
                    <div>
                        Web Technologies, Database Management Systems, Data
                        Structures and Algorithms, Operating Systems, Artificial
                        Intelligence, Software Engineering Design, Information
                        Secuirty, Software Testing
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
