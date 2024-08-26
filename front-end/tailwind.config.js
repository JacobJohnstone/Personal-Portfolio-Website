/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "(-9deg)" },
                    "50%": { transform: "9deg" },
                },
                titleComplete: {
                    "0%": { opacity: 1, bottom: "6rem", color: "#777777" },
                    "1%": { opacity: 0 },
                    "2%": { opacity: 1 },
                    "3%": { opacity: 0 },
                    "5%": { opacity: 0 },
                    "6%": { opacity: 1 },
                    "7%": { opacity: 0 },
                    "8%": { opacity: 1 },
                    "20%": { opacity: 1 },
                    "21%": { opacity: 0 },
                    "22%": { opacity: 0 },
                    "23%": { opacity: 1 },
                    "35%": { bottom: "6rem", color: "#777777" },
                    "100%": { bottom: "17rem", color: "white" }, //28 on desktop
                },
                titleBackground: {
                    "0%": { opacity: 0 },
                    "34%": { opacity: 0, bottom: "6rem", color: "coral" },
                    "35%": {
                        opacity: 0,
                        bottom: "6rem",
                        "background-color": "coral",
                    },
                    "100%": {
                        opacity: 1,
                        bottom: "17rem",
                        "background-color": "coral",
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
                gradientAnimation: {
                    from: {
                        background:
                            "linear-gradient(to bottom, #FFFFFF, #696969, #FFFFFF)",
                    },
                    to: {
                        background: "#FE01FE",
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
                powerDisable: "disappear 1s linear forwards",
                toTop: "titleToTop 2s ease-in-out 1s both",
                phoneTop: "phoneTitleToTop 2s ease-in-out 1s both",
                gradient: "gradientAnimation 10s ease 1s forwards",
                title: "titleComplete 3s linear 2s both",
                titleBackground: "titleBackground 3s linear 2s both",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
