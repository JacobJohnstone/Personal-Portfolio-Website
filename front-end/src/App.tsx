import { useEffect, useState } from "react";
import Home from "./components/homePage/NewHome";
import power from "./images/Power-Btn.png";

//https://www.youtube.com/watch?v=DSneWikjH5E has a good plugin for adding animations in tailwindcss without as many extra extensions

// Idea: gradient box under sticky name title going gradient-to-top, from transparent, to background colour

function App() {
    const [displayHome, setDisplayHome] = useState<boolean>(false); // For switching to the home page
    const [showPowerBtn, setShowPowerBtn] = useState<boolean>(true); // For initiating powerBtn fade
    const [titleMiddle, setTitleMiddle] = useState(true); // For indicating title transition
    const [titleBackground, setTitleBackground] = useState<boolean>(true);
    const [secondBackground, setSecondBackground] = useState<boolean>(true);
    const [disableBtn, setDisableBtn] = useState<boolean>(false); // Disables button upon click, so can't be clicked while animating
    const [width, setWidth] = useState<number>(0);

    // tailwind static to animation changes
    const powerBtnClasses = `${
        showPowerBtn
            ? "relative top-20 z-40 cursor-pointer bg-btnColour opacity-30 p-2 rounded-full h-9 w-9 sm:h-12 sm:w-12 hover:opacity-80 transition duration-300 linear"
            : "relative top-20 bg-btnColour opacity-80 p-2 rounded-full h-9 w-9 sm:h-12 sm:w-12 animate-powerDisable"
    }`;

    const titleClasses = `${
        titleMiddle
            ? "absolute top-60 w-fit text-[#777777] text-5xl sm:text-7xl lg:text-9xl lg:tracking-wider font-thin font-mono z-40"
            : "absolute w-fit text-5xl sm:text-7xl lg:text-9xl lg:tracking-wider drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-light font-mono z-40 animate-title"
    }`;

    const titleBackgroundClasses = `${
        titleBackground
            ? "absolute top-60 w-fit z-30 text-transparent text-5xl sm:text-7xl lg:text-9xl lg:tracking-wider font-bold font-mono"
            : "absolute z-30 w-fit blur-[2px] text-purple-400 text-5xl sm:text-7xl lg:text-9xl lg:tracking-wider font-bold font-mono animate-titleBackground"
    }`;

    const secondBackgroundClasses = `${
        secondBackground
            ? "absolute top-60 w-fit z-30 text-transparent text-5xl sm:text-7xl lg:text-9xl lg:tracking-wider font-bold font-mono"
            : "absolute z-30 w-fit blur-[20px] text-purple-500 text-5xl sm:text-7xl lg:text-9xl lg:tracking-wider font-bold font-mono animate-titleBackground"
    }`;

    // Called on PowerBtn Click
    function handleClick() {
        setShowPowerBtn(false);
        setDisableBtn(true);
        setTitleMiddle(false);
        setTitleBackground(false);
        setSecondBackground(false);
        setTimeout(pageTranistion, 5000); // Delay until all animations are complete
    }

    // Delayed function call for smooth transition
    function pageTranistion() {
        setDisplayHome(true);
    }

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            {displayHome ? (
                <div className="no-scrollbar">
                    <Home />
                </div>
            ) : 5
                <div className="h-screen flex bg-gray-900">
                    <p className="top-0 left-0 text-titleFinal text-3xl">
                        Width: {width}
                    </p>
                    <div className="flex justify-center items-center h-screen w-screen">
                        <div className="fixed bg-largeEclipse rounded-full w-screen h-screen blur-3xl sm:blur-[176px] bg-opacity-20"></div>
                        <div className="fixed bg-smallEclipse rounded-full w-1/2 h-3/5 blur-3xl sm:blur-[234px] bg-opacity-30 z-20"></div>
                    </div>
                    <div className="absolute flex items-center justify-center w-screen h-screen">
                        <div className={titleClasses}>JACOB JOHNSTONE</div>
                    </div>
                    <div className="absolute flex items-center justify-center w-screen h-screen">
                        <div className={titleBackgroundClasses}>
                            JACOB JOHNSTONE
                        </div>
                    </div>
                    <div className="absolute flex items-center justify-center w-screen h-screen">
                        <div className={secondBackgroundClasses}>
                            JACOB JOHNSTONE
                        </div>
                    </div>

                    <div className="absolute flex w-screen h-screen items-center justify-center">
                        <div className={powerBtnClasses}>
                            <button onClick={handleClick} disabled={disableBtn}>
                                <img src={power} alt="Click-Here" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
