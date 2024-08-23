//import { useEffect, useState } from "react";
import About from "./About"
import Skill from "./Skill";
import Project from "./Project";
import pointers from '../../images/PointerPictures.jpg';
import ER from "../../images/ER-Design.png"
import backend from "../../images/PreviousSessionsBackendCode.png"

const Home = () => {
    //const [count, setCount] = useState(0);

    // useEffect(() => {                               // this function runs when the component is loaded, or when the state of the component changes
    //     setCount(count + 1);

    //     return () => alert('goodbye components');   // the function being returned runs when the component is destroyed/removed from the ui AKA: teardown function
    // }, [count]);                                    // dependency array contains count, means this function will be called anytime count changes

    return (

        <div>
            <h1 className='flex flex-row justify-center items-center text-transparent relative
                text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-light font-mono z-30
                bg-gradient-to-b from-red-300 to-bottom-gradient bg-clip-text'>JACOB JOHNSTONE</h1>
            <h3 className='flex flex-row justify-center items-center text-transparent relative
                text-3xl sm:text-4xl md:text-5xl font-light font-mono z-30
                bg-gradient-to-b from-red-300 to-bottom-gradient bg-clip-text'>B.E.Sc</h3>
            <div>
                <About />
            </div>
            
            <div className="bg-black flex justify-center items-center w-screen">
                <h2 className="text-gray-100 text-bold text-3xl w-fit">
                        SKILLS
                </h2>
                <div>
                    <Skill title="Software Development" description="Best practices, OOP, Version control:Java, JavaScript, Typescript, Python"/>
                </div>
                <div>
                    <Skill title="Fullstack Development" description="Web applications built with HTML, CSS, JS, and React : Supported by RESTful APIs, Express backends, and both relational and NoSQL databases"/>
                </div>
                <div>
                    <Skill title="AI Driven Solutions" description="Taking advantage of PyTorch, advancing steps within the field of healthcare"/>
                </div>
            </div>
            <div className="bg-yellow-500">
                <h2>PROJECTS</h2>
                <Project title="PROJECT 1 - Image Translation for Medical Students" 
                    description="Created an image translation program to be used for medical students in training, enhancing their training by allowing them to view a more realistic version when practicing mitral valve surgery procedures" 
                    features={["Translated plastic, model heart images into realistic looking heart images", "Implemented rapid image translation allowing rapid streaming from a camera"]} 
                    featureImages={[pointers, backend]}/>
                <Project title="PROJECT 2 - Relational Database Design and Implementation" 
                    description="Created and designed a relational database. The focus was on the implementation and functionality of the database rather than the front-end design. Within the group, I was in charge of putting together the front end pages and completing the 'Member Info' page, as well as assisting the design and connection of the database" 
                    features={["Relational database designed and implemented to be normalized (ER Picture)", "Member Info provides all the information connected to the member requestsed, such as the class sessions they will be attending and what classes (offerings) they are a part of", "Able to track member statistics such as workout frequencies and class registrations enabling more business decision to be made more effectively", "Made use of an Express backend used to manage queries and responses to and from the databse"]} 
                    featureImages={[ER, pointers, backend]}/>
            </div>
            <div className="bg-green-500">
                <h4>TECHNOLOGIES USED IN THIS PORTFOLIO</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Typescript</li>
                    <li>React</li>
                </ul>
            </div>
            <div className="bg-purple-500">
                <h2>Education</h2>
                <h4>The University of Western Ontario</h4>
                <div>September 2020 - April 2024</div>
                <h5>Relevant Coursework</h5>
                <div>Web Technologies, Database Management Systems, Data Structures and Algorithms, Operating Systems, Artificial Intelligence, Software Engineering Design, Information Secuirty, Software Testing</div>
            </div>
        </div>

    )
}

export default Home;