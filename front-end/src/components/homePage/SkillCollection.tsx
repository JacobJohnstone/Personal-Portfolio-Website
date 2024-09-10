import Skill from "./Skill";

const SkillCollection = () => {
    return (
        <div className="relative w-fit h-fit mt-20">
            <div className="relative z-40">
                <p className="text-yellow-500 blur-[20px] w-screen text-center text-7xl animate-signGlow">
                    Skills
                </p>
                <div className="absolute top-0 z-20 w-fit">
                    <p className="text-center blur-[4px] text-yellow-300 text-7xl w-screen animate-signGlow">
                        Skills
                    </p>
                </div>
                <div className="absolute top-0 z-20 w-fit">
                    <p className="text-center text-titleFinal text-7xl w-screen drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Skills
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-16">
                <div className="flex justify-center w-2/3 rounded-3xl m-10">
                    <Skill
                        title="Software Development"
                        description="Best practices, OOP, Version control: Java, JavaScript, TypeScript, Python"
                    />
                    <Skill
                        title="Fullstack Development"
                        description="Web applications built with HTML, CSS, JS, and React : Supported by RESTful APIs, Express backends, and both relational and NoSQL databases"
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
