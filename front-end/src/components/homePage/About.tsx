const About = () => {
    //flex absolute top-0 w-screen justify-center text-center
    return (
        <div className="flex-block justify-center items-center text-center mx-2 text-3xl">
            <div className="w-fit p-5 border-0 border-gray-200 rounded-3xl animate-tableOfContentsTwo">
                <div className="relative mb-3 lg:mb-5 animate-tableOfContentsOne rounded-xl p-1 ">
                    <p className="text-center blur-[2.5px] text-yellow-300 text-3xl sm:text-4xl lg:text-5xl  animate-signGlow">
                        Skills
                    </p>
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 justify-center text-center">
                        <a
                            href="#skills"
                            className="text-center w-fit text-titleFinal text-3xl sm:text-4xl lg:text-5xl cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:opacity-100 transition duration-300 linear"
                        >
                            Skills
                        </a>
                    </div>
                </div>
                <div className="relative my-3 lg:my-5 animate-tableOfContentsTwo rounded-xl p-1 sm:pb-2 ">
                    <p className="text-center blur-[2.5px] text-sky-300 text-3xl sm:text-4xl lg:text-5xl animate-signGlow">
                        Projects
                    </p>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 justify-center text-center">
                        <a
                            href="#projects"
                            className="text-center text-titleFinal text-3xl sm:text-4xl lg:text-5xl  cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:opacity-100 transition duration-300 linear"
                        >
                            Projects
                        </a>
                    </div>
                </div>
                <div className="relative my-3 lg:my-5 animate-tableOfContentsThree rounded-xl p-1  ">
                    <p className="text-center blur-[2.5px] text-indigo-300 text-3xl sm:text-4xl lg:text-5xl animate-signGlow">
                        Education
                    </p>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 justify-center text-center">
                        <a
                            href="#education"
                            className="text-center text-titleFinal text-3xl sm:text-4xl lg:text-5xl cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:opacity-100 transition duration-300 linear"
                        >
                            Education
                        </a>
                    </div>
                </div>
                <div className="relative mt-3 lg:mt-5 animate-tableOfContentsFour p-1 rounded-xl ">
                    <p className="text-center blur-[2.5px] text-gray-300 text-3xl sm:text-4xl lg:text-5xl animate-signGlow">
                        Contact
                    </p>
                    <div className="flex absolute top-0 left-1/2 -translate-x-1/2 justify-center text-center">
                        <a
                            href="#contact"
                            className="text-center text-titleFinal text-3xl sm:text-4xl lg:text-5xl  cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:opacity-100 transition duration-300 linear"
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
