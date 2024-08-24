import { useState } from "react";
//import './App.css';
//import LandingPage from "./components/landingPage/landingPage";
import Home from "./components/homePage/Home";
import power from "./images/Power-Btn.png";

//https://www.youtube.com/watch?v=DSneWikjH5E has a good plugin for adding animations in tailwindcss without as many extra extensions

function App() {
    const [display, setDisplay] = useState(false);
    const [showPower, setShowPower] = useState(true);

    function handleClick() {
        //e.currentTarget.remove();
        //console.log("removed" + e.currentTarget);
        setShowPower(false);
        setDisplay(true);
    }

    return (
        <div>
            {display ? (
                <div className="h-fit text-gray-500 bg-gray-800">
                    <Home />
                </div>
            ) : (
                <div className="h-screen flex items-center justify-center text-white bg-gray-800">
                    <div className="absolute bg-largeEclipse rounded-full w-screen h-screen blur-3xl sm:blur-[176px] bg-opacity-20"></div>
                    <div className="absolute bg-smallEclipse rounded-full w-1/2 h-3/5 blur-3xl sm:blur-[234px] bg-opacity-30 z-20"></div>
                    <div>
                        <div
                            className="flex flex-row justify-center items-center text-transparent relative sm:bottom-24
                                text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-light font-mono z-30
                                bg-gradient-to-b from-white to-bottomGradient bg-clip-text">
                            JACOB JOHNSTONE
                        </div>
                        <div className="flex m-auto text-white w-fit top-24 sm:top-1 relative z-30">
                            <div>
                                {showPower && (
                                    <img
                                        src={power}
                                        alt="Click-Here"
                                        onClick={(e) => {
                                            handleClick();
                                        }}
                                        className="flex items-center justify-center cursor-pointer bg-btnColour p-2 rounded-full h-9 w-9 sm:h-12 sm:w-12"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
