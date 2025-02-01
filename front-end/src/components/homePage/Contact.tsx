import github from "../../images/githubIcon.png";
import linkedin from "../../images/linkedinIcon.webp";
import resume from "../../images/resumeIcon.png";
import email from "../../images/gmailIcon.webp";

const Contact = () => {
    return (
        <div className="w-screen h-fit flex justify-center mt-20 bg-gray-800 border-t-2 border-gray-500 z-40 pt-7 xs:pt-10">
            <div className="flex-block w-3/4 xs:w-2/3 lg:w-fit justify-center">
                <div className="flex justify-center">
                    <p className="text-titleFinal text-center text-5xl sm:text-6xl lg:text-7xl rounded-xl w-fit drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Contact
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="flex xs:h-16 lg:h-20 w-full justify-center items-center my-10 bg-gray-300 py-2 rounded-3xl">
                        <div className="h-14 xs:h-16 lg:h-20">
                            <a
                                href="/assets/Jacob-Johnstone-Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img
                                    src={resume}
                                    className="max-h-full  sm:mx-5 lg:mx-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer"
                                />
                            </a>
                        </div>
                        <div className="h-14 xs:h-16 lg:h-20">
                            <a
                                href="https://github.com/JacobJohnstone"
                                target="_blank">
                                <img
                                    src={github}
                                    className="max-h-full  sm:mx-5 lg:mx-10 xs:p-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer"
                                />
                            </a>
                        </div>
                        <div className="h-14 xs:h-16 lg:h-20">
                            <a
                                href="https://www.linkedin.com/in/jacobjohnstone/"
                                target="_blank">
                                <img
                                    src={linkedin}
                                    className="max-h-full  sm:mx-5 lg:mx-10 xs:p-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer"
                                />
                            </a>
                        </div>
                        <div className="h-14 xs:h-16 lg:h-20">
                            <a href="mailto:jjohnstone681@gmail.com">
                                <img
                                    src={email}
                                    className="max-h-full  sm:mx-5 lg:mx-10 xs:p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
