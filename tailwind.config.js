/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    tailwindConfig: './styles/tailwind.config.js',
    theme: {
        extend: {},
        screens: {
            '2xs': '320px',
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '991px',
            xlg: '1024px',
            '2xl': '1199px'
        },
        colors: {
            'dark-navy': '#020c1b',
            'navy': '#0a192f',
            'light-navy': '#112240',
            'lightest-navy': '#233554',
            'dark-slate': '#172a45',
            'slate': '#8892b0',
            'light-slate': '#a8b2d1',
            'lightest-slate': '#ccd6f6',
            'green': '#64ffda',
            'light-green': '#aaffec',
            'white': '#e6f1ff'
        },
        fontFamily: {
            roboto: ['roboto', 'sans-serif'],
            nunito: ['nunito', 'sans-serif'],
        },
    },
    plugins: [],
};
