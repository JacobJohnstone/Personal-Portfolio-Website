import { useState } from "react";
import Home from "./components/homePage/Home";
import power from "./images/Power-Btn.png";

//https://www.youtube.com/watch?v=DSneWikjH5E has a good plugin for adding animations in tailwindcss without as many extra extensions

function App() {
    const [displayHome, setDisplayHome] = useState<boolean>(false); // For switching to the home page
    const [showPowerBtn, setShowPowerBtn] = useState<boolean>(true); // For initiating powerBtn fade
    const [titleMiddle, setTitleMiddle] = useState(true);
    const [disableBtn, setDisableBtn] = useState<boolean>(false); // Disables button upon click, so can't be clicked while animating

    // tailwind static to animation changes
    const powerBtnClasses = `${
        showPowerBtn
            ? "flex items-center justify-center cursor-pointer bg-btnColour opacity-30 p-2 rounded-full h-9 w-9 sm:h-12 sm:w-12 hover:opacity-80 transition duration-300 linear"
            : "flex items-center justify-center bg-btnColour opacity-80 p-2 rounded-full h-9 w-9 sm:h-12 sm:w-12 animate-powerDisable"
    }`;

    const titleClasses = `${
        titleMiddle
            ? "flex flex-row justify-center items-center relative sm:bottom-24 text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-light font-mono z-30"
            : "flex flex-row justify-center items-center relative text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-light font-mono z-30 animate-phoneTop sm:animate-toTop duration-500"
    }`;

    // Called on PowerBtn Click
    function handleClick() {
        setShowPowerBtn(false);
        setDisableBtn(true);
        setTitleMiddle(false);
        setTimeout(pageTranistion, 5000); // Delay until all animations are complete
    }

    // Delayed function call for smooth transition
    function pageTranistion() {
        setDisplayHome(true);
    }

    return (
        <div>
            {displayHome ? (
                <div className="h-fit text-gray-500 bg-gray-800">
                    <Home />
                </div>
            ) : (
                <div>
                    <div className="h-screen flex items-center justify-center text-white bg-gray-800">
                        <div className="absolute bg-largeEclipse rounded-full w-screen h-screen blur-3xl sm:blur-[176px] bg-opacity-20"></div>
                        <div className="absolute bg-smallEclipse rounded-full w-1/2 h-3/5 blur-3xl sm:blur-[234px] bg-opacity-30 z-20"></div>
                        <div>
                            <div className={titleClasses}>JACOB JOHNSTONE</div>
                            <div className="flex m-auto text-white w-fit top-24 sm:top-1 relative z-30">
                                <div>
                                    <button
                                        onClick={(e) => {
                                            handleClick();
                                        }}
                                        disabled={disableBtn}>
                                        <img
                                            src={power}
                                            alt="Click-Here"
                                            className={powerBtnClasses}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
