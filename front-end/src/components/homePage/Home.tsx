import { useEffect, useState } from "react";
import About from "./About"

const Home = () => {
    const [count, setCount] = useState(0);

    // useEffect(() => {                               // this function runs when the component is loaded, or when the state of the component changes
    //     setCount(count + 1);

    //     return () => alert('goodbye components');   // the function being returned runs when the component is destroyed/removed from the ui AKA: teardown function
    // }, [count]);                                    // dependency array contains count, means this function will be called anytime count changes


    return (

        <>
            <h1>JACOB JOHNSTONE</h1>
            <h3>B.E.Sc</h3>
            <div className="about-section">
                <About />
                <img className="some-cool-hobby-collection"></img>
            </div>
            <h2>Skills</h2>
            <div>
                <div>
                    <h4>Software Development</h4>
                    <div>Best practices, OOP, Version Control</div>
                    <div>Java, JavaScript, TypeScript, Python</div>
                </div>
                <div>
                    <h4>Fullstack Development</h4>
                    <div>Web applications built with HTML, CSS, JS, and React</div>
                    <div>Supported by RESTful APIs, Express backends, and both relational and NoSQL databases</div>
                </div>
                <div>
                    <h4>AI Driven Solutions</h4>
                    <div>Taking advantage of PyTorch, advancing steps within the field of healthcare</div>
                </div>
            </div>
            <h2>Projects</h2>
            <div>
                <h4>Project 1 - Image Translation for Medical Students</h4>
                <div>features</div>
                <div>image</div>
                <h4>Project 2 - Relational Database Design and Implementation</h4>
                <div>features</div>
                <div>image</div>
            </div>
            <div>
                <h2>Education</h2>
                <h4>The University of Western Ontario</h4>
                <div>September 2020 - April 2024</div>
                <h5>Relevant Coursework</h5>
                <div>Web Technologies, Database Management Systems, Data Structures and Algorithms, Operating Systems, Artificial Intelligence, Software Engineering Design, Information Secuirty, Software Testing</div>
            </div>
        </>

    )
}

export default Home;