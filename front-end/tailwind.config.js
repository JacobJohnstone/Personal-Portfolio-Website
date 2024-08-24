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
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
