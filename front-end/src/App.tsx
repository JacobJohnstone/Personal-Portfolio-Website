import { useState } from "react";
import Home from "./components/homePage/Home";
import power from "./images/Power-Btn.png";

//https://www.youtube.com/watch?v=DSneWikjH5E has a good plugin for adding animations in tailwindcss without as many extra extensions

// Idea: gradient box under sticky name title going gradient-to-top, from transparent, to background colour

function App() {
    const [displayHome, setDisplayHome] = useState<boolean>(false); // For switching to the home page
    const [showPowerBtn, setShowPowerBtn] = useState<boolean>(true); // For initiating powerBtn fade
    const [titleMiddle, setTitleMiddle] = useState(true); // For indicating title transition
    const [titleBackground, setTitleBackground] = useState<boolean>(true); // For
    const [disableBtn, setDisableBtn] = useState<boolean>(false); // Disables button upon click, so can't be clicked while animating

    // tailwind static to animation changes
    const powerBtnClasses = `${
        showPowerBtn
            ? "relative top-20 z-40 cursor-pointer bg-btnColour opacity-30 p-2 rounded-full h-9 w-9 sm:h-12 sm:w-12 hover:opacity-80 transition duration-300 linear"
            : "relative top-20 bg-btnColour opacity-80 p-2 rounded-full h-9 w-9 sm:h-12 sm:w-12 animate-powerDisable"
    }`;

    const titleClasses = `${
        titleMiddle
            ? "relative bottom-20 w-fit text-[#777777] text-4xl sm:text-5xl md:text-7xl lg:text-9xl lg:tracking-wider font-thin font-mono z-40"
            : "relative w-fit text-4xl sm:text-5xl md:text-8xl lg:text-9xl lg:tracking-wider font-light font-mono z-40 sm:animate-title"
    }`;

    const titleBackgroundClasses = `${
        titleBackground
            ? "relative w-fit bottom-20 z-30 blur-[20px] text-transparent text-4xl sm:text-5xl md:text-8xl lg:text-9xl lg:tracking-wider font-bold font-mono"
            : "relative z-30 w-fit blur-[20px] text-red-200 text-4xl sm:text-5xl md:text-8xl lg:text-9xl lg:tracking-wider bg-opacity-40 bg-red-400 font-bold font-mono sm:animate-titleBackground"
    }`;

    // Called on PowerBtn Click
    function handleClick() {
        setShowPowerBtn(false);
        setDisableBtn(true);
        setTitleMiddle(false);
        setTitleBackground(false);
        setTimeout(pageTranistion, 6000); // Delay until all animations are complete
    }

    // Delayed function call for smooth transition
    function pageTranistion() {
        setDisplayHome(true);
    }

    return (
        <div>
            {displayHome ? (
                <div className="h-fit flex items-center justify-center text-gray-500 bg-gray-800">
                    <Home />
                </div>
            ) : (
                <div className="h-screen flex bg-gray-800">
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
