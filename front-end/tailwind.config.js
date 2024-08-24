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
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                },
            },
            colors: {
                smallEclipse: "#554301",
                largeEclipse: "#4F2202",
                bottomGradient: "#696969",
                btnColour: "#C5C5C5",
            },
            blur: {
                smallBlur: "234px",
                largeBlur: "176px",
            },
            animation: {
                spinSlow: "spin 60s linear infinite",
                wiggle: "wiggle 1s linear infinite",
                powerDisable: "disappear 1s linear forwards",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
