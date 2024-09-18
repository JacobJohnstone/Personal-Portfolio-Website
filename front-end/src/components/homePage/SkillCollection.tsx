import Skill from "./Skill";

const SkillCollection = () => {
    return (
        <div className="relative w-screen h-fit mt-20">
            <div className="relative z-40">
                <p className="text-yellow-300 blur-[8px] w-screen text-center text-5xl sm:text-6xl lg:text-7xl animate-signGlow">
                    Skills
                </p>
                <div className="absolute top-0 z-20 w-fit">
                    <p className="text-center blur-[4px] text-yellow-500 text-5xl sm:text-6xl lg:text-7xl w-screen animate-signGlow">
                        Skills
                    </p>
                </div>
                <div className="absolute top-0 z-20 w-fit">
                    <p className="text-center text-titleFinal text-5xl sm:text-6xl lg:text-7xl w-screen drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Skills
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex-block mdlg:flex items-start justify-center w-5/6 xs:w-2/3 rounded-3xl m-10">
                    <Skill
                        title="Software Development"
                        description="Best practices, OOP, Version control: Java, JavaScript, C#, Python"
                    />
                    <Skill
                        title="Fullstack Development"
                        description="Web applications built with HTML, CSS, JS, and React: Supported by RESTful APIs, Express backends, and relational/NoSQL databases"
                    />
                    <Skill
                        title="AI Driven Solutions"
                        description="Taking advantage of PyTorch, advancing steps within the field of healthcare"
                    />
                </div>
            </div>
        </div>
    );
};

export default SkillCollection;
