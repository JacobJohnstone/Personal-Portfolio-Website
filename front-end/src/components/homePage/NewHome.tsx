import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import pointers from "../../images/PointerPictures.jpg";
import ER from "../../images/ER-Design.png";
import backend from "../../images/PreviousSessionsBackendCode.png";
import Title from "./Title";
import SkillCollection from "./SkillCollection";
import ProjectCollection from "./ProjectCollection";

const Home = () => {
    return (
        <div className="bg-gray-900 overflow-x-hidden z-50">
            <div className="h-screen w-screen">
                <Title />
                <div className="relative flex justify-center top-1/3">
                    <About />
                </div>
            </div>
            <div className="flex justify-center">
                <SkillCollection />
            </div>
            <div className="flex justify-center">
                <ProjectCollection />
            </div>
        </div>
    );
};

export default Home;
