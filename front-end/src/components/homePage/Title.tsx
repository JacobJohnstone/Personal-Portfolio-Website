const Title = () => {
    return (
        <>
            <div className="fixed h-screen w-screen flex items-center justify-center">
                <div className="flex items-center justify-center bg-largeEclipse h-screen w-screen rounded-full blur-[176px] bg-opacity-40">
                    <div className="bg-smallEclipse h-3/5 w-1/2 rounded-full blur-[234px] bg-opacity-80"></div>
                </div>
            </div>
            <div className="flex justify-center text-center">
                <div className="relative top-20 w-fit z-40">
                    <p className="blur-[20px] text-purple-500 font-bold text-4xl lg:text-9xl lg:tracking-wider font-mono">
                        JACOB JOHNSTONE
                    </p>
                    <div className="absolute top-0 z-20 w-fit">
                        <p className="blur-[2px] text-purple-400 text-4xl lg:text-9xl lg:tracking-wider font-bold font-mono">
                            JACOB JOHNSTONE
                        </p>
                    </div>
                    <div className="absolute top-0 z-20 w-fit">
                        <p className="text-titleFinal font-light text-4xl lg:text-9xl lg:tracking-wider font-mono">
                            JACOB JOHNSTONE
                        </p>
                    </div>
                </div>
                <div className="absolute top-52 w-fit z-40">
                    <p className="blur-[20px] text-purple-500 font-bold text-4xl lg:text-6xl lg:tracking-wider font-mono">
                        B.E.Sc
                    </p>
                    <div className="absolute top-0 z-20 w-fit">
                        <p className="blur-[2px] text-purple-400 text-4xl lg:text-6xl lg:tracking-wider font-bold font-mono">
                            B.E.Sc
                        </p>
                    </div>
                    <div className="absolute top-0 z-20 w-fit">
                        <p className="text-titleFinal font-light text-4xl lg:text-6xl lg:tracking-wider font-mono">
                            B.E.Sc
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Title;
