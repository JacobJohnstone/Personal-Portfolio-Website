//Skill 1: title=software development description: Best practices, OOP, version control {\n} Java, JavaScript, TypeScript, Python
//Skill 2: title=Fullstack Development description: web applications built with HTML, CSS, JS, and React {\n} Supported by RESTful APIs, express backends, and both relational and NoSQL databases
//Skill 3: title=AI driven solutions description: Taking advantage of PyTorch, advancing steps within the field of healthcare

type SkillProps = {
    title: string;
    description: string;
};

const Skill = ({ title, description }: SkillProps) => {
    return (
        <div className="bg-gray-800 mx-2 my-2 rounded-3xl w-fit">
            <div className="text-gray-100 text-lg sm:text-2xl md:text-2xl text-center pt-5 px-1 font-mono">
                {title}
            </div>
            <div className="text-gray-400 text-center text-md md:text-lg pb-10 px-5 lg:px-2 pt-5">
                {String(description)}
            </div>
        </div>
    );
};

export default Skill;
