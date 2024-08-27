import Skill from "./Skill";

const SkillCollection = () => {
    return (
        <>
            <div>Skills</div>
            <Skill
                title="Software Development"
                description="Best practices, OOP, Version control:Java, JavaScript, Typescript, Python"
            />
            <Skill
                title="Fullstack Development"
                description="Web applications built with HTML, CSS, JS, and React : Supported by RESTful APIs, Express backends, and both relational and NoSQL databases"
            />
            <Skill
                title="AI Driven Solutions"
                description="Taking advantage of PyTorch, advancing steps within the field of healthcare"
            />
        </>
    );
};

export default SkillCollection;
