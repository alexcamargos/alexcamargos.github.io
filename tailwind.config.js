/** @type {import('tailwindcss').Config} */
module.exports = {
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
            "navy-dark": "#020c1b",
            navy: "#0a192f",
            "navy-light": "#112240",
            "navy-lightest": "#233554",
            "slate-dark": "#172a45",
            slate: "#8892b0",
            "slate-light": "#a8b2d1",
            "slate-lightest": "#ccd6f6",
            green: "#64ffda",
            "green-light": "#aaffec",
            white: "#e6f1ff",
        },
        fontFamily: {
            roboto: ["roboto", "sans-serif"],
            nunito: ["nunito", "sans-serif"],
        },
    },
    plugins: [],
};
