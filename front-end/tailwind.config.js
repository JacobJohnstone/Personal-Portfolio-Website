/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                titleComplete: {
                    "0%": { opacity: 1, bottom: "5rem", color: "#777777" },
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
                    "50%": { opacity: 1, bottom: "5rem", color: "#777777" }, //0 white
                    "51%": { color: "#CCCCCC" },
                    "100%": {
                        opacity: 1,
                        bottom: "24.25rem",
                        color: "#EBEBEB",
                    }, //28 on desktop
                },
                titleBackground: {
                    "0%": { opacity: 0, bottom: "5rem" },
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
                        bottom: "5rem",
                    },
                    "100%": {
                        opacity: 80,
                        bottom: "24rem",
                    },
                },
                disappear: {
                    from: { opacity: 80 },
                    to: { opacity: 0 },
                },
                titleToTop: {
                    from: {
                        bottom: "6rem",
                        color: "white",
                    },
                    to: {
                        bottom: "28rem",
                        color: "black",
                    },
                },
                phoneTitleToTop: {
                    from: {
                        bottom: "0rem",
                    },
                    to: {
                        bottom: "16rem",
                    },
                },
            },
            colors: {
                smallEclipse: "#554301",
                largeEclipse: "#4F2202",
                bottomGradient: "#696969",
                btnColour: "#F0EFF0",
            },
            animation: {
                spinSlow: "spin 60s linear infinite",
                powerDisable: "disappear 0.5s linear forwards",
                toTop: "titleToTop 2s ease-in-out 1s both",
                phoneTop: "phoneTitleToTop 2s ease-in-out 1s both",
                title: "titleComplete 4s linear 1s both",
                titleBackground: "titleBackground 4s linear 1s both",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
