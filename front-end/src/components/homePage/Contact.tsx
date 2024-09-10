import github from "../../images/githubIcon.png";
import linkedin from "../../images/linkedinIcon.webp";
import resume from "../../images/resumeIcon.png";
import email from "../../images/gmailIcon.webp";

const Contact = () => {
    return (
        <div className="w-screen h-fit flex justify-center mt-20 bg-gray-800 z-40 pt-10">
            <div className="flex-block w-2/3 justify-center">
                <div className="text-titleFinal text-center text-7xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    Contact
                </div>

                <div className="w-full flex justify-center">
                    <div className="flex h-20 w-fit justify-center items-center my-10 bg-gray-300 py-2 rounded-3xl">
                        <div className="h-20">
                            <a
                                href="..\..\assets\Jacob-Johnstone-Resume.pdf"
                                target="_blank"
                                className="max-h-full"
                            >
                                <img
                                    src={resume}
                                    className="h-20 mx-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer"
                                />
                            </a>
                        </div>
                        <a href="https://github.com/Jacob-13" target="_blank">
                            <img
                                src={github}
                                className="max-h-full mx-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jacobjohnstone/"
                            target="_blank"
                        >
                            <img
                                src={linkedin}
                                className="max-h-full mx-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer"
                            />
                        </a>
                        <a href="mailto:jjohnstone681@gmail.com">
                            <img
                                src={email}
                                className="max-h-full mx-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
