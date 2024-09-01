const Education = () => {
    return (
        <div className="relative w-fit h-fit mt-20">
            <div className="relative z-40">
                <p className="text-indigo-500 blur-[20px] w-screen text-center text-7xl animate-signGlow">
                    Education
                </p>
                <div className="absolute top-0 z-20 w-fit">
                    <p className="text-center blur-[4px] text-indigo-300 text-4xl lg:text-7xl w-screen animate-signGlow">
                        Education
                    </p>
                </div>
                <div className="absolute top-0 z-20 w-fit">
                    <p className="text-center text-titleFinal text-7xl w-screen lg:text-7xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Education
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="bg-gray-800 w-2/3 h-fit flex-block mt-16 p-10 rounded-3xl">
                    <div className="text-titleFinal text-2xl">
                        The University of Western Ontario
                    </div>
                    <div className="text-gray-500 text-xl">2020 - 2024</div>
                    <div className="text-titleFinal text-xl mt-5">
                        Relevant Coursework
                    </div>
                    <div className="text-gray-400 text-lg ml-10 mt-2">
                        Web Technologies, Database Management Systems, Data
                        Structures and Algorithms, Operating Systems, Artificial
                        Intelligence, Software Engineering Design, Information
                        Secuirty, Software Testing
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
