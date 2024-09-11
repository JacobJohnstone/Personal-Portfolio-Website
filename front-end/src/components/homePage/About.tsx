const About = () => {
    return (
        <div className="text-center">
            <div className="flex-block justify-center items-center text-center mx-2 text-3xl">
                <div className="relative mb-3 animate-tableOfContentsOne">
                    <p className="text-center blur-[4px] text-yellow-300 text-3xl sm:text-4xl lg:text-5xl w-screen animate-signGlow">
                        Skills
                    </p>
                    <div className="flex absolute top-0 w-screen justify-center text-center">
                        <a
                            href="#skills"
                            className="text-center w-fit text-titleFinal opacity-60 text-3xl sm:text-4xl lg:text-5xl cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:opacity-100 transition duration-300 linear"
                        >
                            Skills
                        </a>
                    </div>
                </div>
                <div className="relative my-3 animate-tableOfContentsTwo">
                    <p className="text-center blur-[4px] text-sky-300 text-3xl sm:text-4xl lg:text-5xl w-screen animate-signGlow">
                        Projects
                    </p>
                    <div className="flex absolute top-0 w-screen justify-center text-center">
                        <a
                            href="#projects"
                            className="text-center text-titleFinal text-3xl sm:text-4xl lg:text-5xl opacity-60 cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:opacity-100 transition duration-300 linear"
                        >
                            Projects
                        </a>
                    </div>
                </div>
                <div className="relative my-3 animate-tableOfContentsThree">
                    <p className="text-center blur-[4px] text-indigo-300 text-3xl sm:text-4xl lg:text-5xl w-screen animate-signGlow">
                        Education
                    </p>
                    <div className="flex absolute top-0 w-screen justify-center text-center">
                        <a
                            href="#education"
                            className="text-center text-titleFinal text-3xl sm:text-4xl lg:text-5xl opacity-60 cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:opacity-100 transition duration-300 linear"
                        >
                            Education
                        </a>
                    </div>
                </div>
                <div className="relative mt-3 animate-tableOfContentsFour">
                    <p className="text-center blur-[4px] text-gray-300 text-3xl sm:text-4xl lg:text-5xl w-screen animate-signGlow">
                        Contact
                    </p>
                    <div className="flex absolute top-0 w-screen justify-center text-center">
                        <a
                            href="#contact"
                            className="text-center text-titleFinal text-3xl sm:text-4xl lg:text-5xl opacity-60 cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:opacity-100 transition duration-300 linear"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
