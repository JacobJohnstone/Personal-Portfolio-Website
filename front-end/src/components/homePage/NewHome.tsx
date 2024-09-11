import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import pointers from "../../images/PointerPictures.jpg";
import ER from "../../images/ER-Design.png";
import backend from "../../images/PreviousSessionsBackendCode.png";
import Title from "./Title";
import SkillCollection from "./SkillCollection";
import ProjectCollection from "./ProjectCollection";
import Education from "./Education";
import Contact from "./Contact";
import { useEffect, useState } from "react";

const Home = () => {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="bg-gray-900 overflow-x-hidden">
            <p className="text-3xl text-titleFinal top-0 left-0 fixed">
                Width: {width}
            </p>
            <div className="h-screen w-screen">
                <Title />
                <div className="relative flex justify-center top-1/4">
                    <About />
                </div>
            </div>
            <div id="skills" className="flex justify-center">
                <SkillCollection />
            </div>
            <div id="projects" className="flex justify-center">
                <ProjectCollection />
            </div>
            <div id="education" className="flex justify-center">
                <Education />
            </div>
            <div id="contact" className="flex justify-center">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
