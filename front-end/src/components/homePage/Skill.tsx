//Skill 1: title=software development description: Best practices, OOP, version control {\n} Java, JavaScript, TypeScript, Python
//Skill 2: title=Fullstack Development description: web applications built with HTML, CSS, JS, and React {\n} Supported by RESTful APIs, express backends, and both relational and NoSQL databases
//Skill 3: title=AI driven solutions description: Taking advantage of PyTorch, advancing steps within the field of healthcare

type SkillProps = {
    title: string;
    description: string;
};

const Skill = ({ title, description }: SkillProps) => {
    return (
        <div className="xs:bg-gray-600 bg-opacity-80 mx-2 my-2 lg:my-0 w-fit rounded-3xl p-2 md:p-3">
            <div className="text-yellow-200 text-lg sm:text-2xl md:text-2xl text-center bg-gray-700 bg-opacity-80 py-3 px-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-semibold font-mono border-2 border-gray-100">
                {title}
            </div>
            <div className="text-gray-900 font-mono font-semibold text-center text-md md:text-lg pb-10 px-5 lg:px-2 pt-2 mt-2 mt-2 bg-yellow-100 bg-opacity-80 rounded-b-3xl">
                {String(description)}
            </div>
        </div>
    );
};

export default Skill;
