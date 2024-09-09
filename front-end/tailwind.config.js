/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "640px",

            md: "768px",

            lg: "1024px",

            xl: "1280px",

            "2xl": "1536px",
        },
        extend: {
            keyframes: {
                titleComplete: {
                    "0%": { opacity: 1, top: "15rem", color: "#777777" },
                    "1%": { opacity: 1 }, //0
                    "2%": { opacity: 1, color: "#CCCCCC" }, //white , color: "white"
                    "3%": { opacity: 1 }, //0
                    "5%": { opacity: 1 }, //0
                    "6%": { opacity: 1 }, //white
                    "7%": { opacity: 1, color: "#777777" }, //0
                    "8%": { opacity: 1 }, //white
                    "20%": { opacity: 1 }, //white
                    "21%": { opacity: 1 }, //0
                    "22%": { opacity: 1 }, //0
                    "23%": { opacity: 1 }, //0 //white
                    "50%": { opacity: 1, top: "15rem", color: "#777777" }, //0 white
                    "51%": { color: "#CCCCCC" },
                    "100%": {
                        opacity: 1,
                        top: "5rem",
                        color: "#EBEBEB",
                    }, //28 on desktop
                },
                titleBackground: {
                    "0%": { opacity: 0, top: "15rem" },
                    "1%": { opacity: 0 },
                    "2%": { opacity: 1 },
                    "3%": { opacity: 0 },
                    "5%": { opacity: 0 },
                    "6%": { opacity: 1 },
                    "7%": { opacity: 0 },
                    "8%": { opacity: 0 },
                    "19%": { opacity: 0 },
                    "20%": { opacity: 1 },
                    "21%": { opacity: 0 },
                    "22%": { opacity: 0 },
                    "23%": { opacity: 0 },
                    "50%": {
                        opacity: 0,
                        top: "15rem",
                    },
                    "100%": {
                        opacity: 80,
                        top: "5rem", // 17 on laptop, 24 on desktop
                    },
                },
                disappear: {
                    from: { opacity: 80 },
                    to: { opacity: 0 },
                },
                glow: {
                    from: { opacity: 1 },
                    "50%": { opacity: 0.5 },
                    to: { opacity: 1 },
                },
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
            },
            colors: {
                smallEclipse: "#554301",
                largeEclipse: "#4F2202",
                bottomGradient: "#696969",
                btnColour: "#F0EFF0",
                titleFinal: "#EBEBEB",
            },
            animation: {
                powerDisable: "disappear 0.5s linear forwards",
                title: "titleComplete 4s linear 1s both",
                titleBackground: "titleBackground 4s linear 1s both",
                signGlow: "glow 5s linear infinite",
                fadeIn: "fadeIn 0.5s linear forwards",
            },
        },
    },
    plugins: [],
};
