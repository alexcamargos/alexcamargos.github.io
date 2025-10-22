/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    mode: 'jit',
    content: ["./src/**/*.{html,js}"],
    tailwindConfig: "./styles/tailwind.config.js",
    theme: {
        extend: {},
        screens: {
            "2xs": "320px",
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "991px",
            xlg: "1024px",
            "2xl": "1199px",
        },
        colors: {
            navy: {
                DEFAULT: "#0a192f",
                dark: "#020c1b",
                light: "#112240",
                lightest: "#233554",
            },
            slate: {
                DEFAULT: "#8892b0",
                dark: "#172a45",
                light: "#a8b2d1",
                lightest: "#ccd6f6",
            },
            green: {
                DEFAULT: "#64ffda",
                dark: "#3ae3c1",
                light: "#aaffec",
            },
            white: "#e6f1ff",
        },
        fontFamily: {
            roboto: ["roboto", "sans-serif"],
            nunito: ["nunito", "sans-serif"],
        },
    },
    plugins: [],
};
