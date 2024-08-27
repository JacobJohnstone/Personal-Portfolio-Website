import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import pointers from "../../images/PointerPictures.jpg";
import ER from "../../images/ER-Design.png";
import backend from "../../images/PreviousSessionsBackendCode.png";
import Title from "./Title";
import SkillCollection from "./SkillCollection";

const Home = () => {
    return (
        <div className="h-fit bg-gray-800 overflow-x-hidden">
            <div className="h-screen w-screen">
                <Title />
                <div className="flex justify-center">
                    <About />
                </div>
            </div>
            <SkillCollection />
        </div>
    );
};

export default Home;
