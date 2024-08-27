import Home from "../homePage/Home";

<div className="h-fit flex text-gray-500 bg-gray-800">
    <div className="flex justify-center items-center h-screen w-screen">
        <div className="fixed bg-largeEclipse rounded-full w-screen h-screen blur-3xl sm:blur-[176px] bg-opacity-20"></div>
        <div className="fixed bg-smallEclipse rounded-full w-1/2 h-3/5 blur-3xl sm:blur-[234px] bg-opacity-30 z-20"></div>
    </div>
    <div className="absolute flex items-center justify-center w-screen h-screen">
        <div
            className={
                "absolute top-20 w-fit text-titleFinal text-4xl sm:text-5xl md:text-8xl lg:text-9xl lg:tracking-wider font-light font-mono z-40"
            }
        >
            JACOB JOHNSTONE
        </div>
    </div>
    <div className="absolute flex items-center justify-center w-screen h-screen">
        <div
            className={
                "absolute top-20 z-30 w-fit blur-[2px] text-purple-400 text-4xl sm:text-5xl md:text-8xl lg:text-9xl lg:tracking-wider font-bold font-mono"
            }
        >
            JACOB JOHNSTONE
        </div>
    </div>
    <div className="absolute flex items-center justify-center w-screen h-screen">
        <div
            className={
                "absolute top-20 z-30 w-fit blur-[20px] text-purple-500 text-4xl sm:text-5xl md:text-8xl lg:text-9xl lg:tracking-wider font-bold font-mono"
            }
        >
            JACOB JOHNSTONE
        </div>
    </div>
    <Home />
</div>;
