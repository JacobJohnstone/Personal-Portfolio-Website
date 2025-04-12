import About from "./About";
import Title from "./Title";
import SkillCollection from "./SkillCollection";
import ProjectCollection from "./ProjectCollection";
import Education from "./Education";
import Contact from "./Contact";

const Home = () => {
    return (
        <div className="bg-gray-900 overflow-x-hidden">
            <div className="h-screen w-screen">
                <Title />
                <div className="relative flex justify-center top-[10rem] md:top-[6rem]">
                    <About />
                </div>
            </div>
            <div className="bg-gray-900 z-20">
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
        </div>
    );
};

export default Home;
