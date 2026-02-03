/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Importante para o seu toggle manual
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                // Cores Semânticas baseadas no Slate e Sky
                primary: { DEFAULT: '#0F172A', light: '#F8FAFC' }, // Slate 900/50
                accent: { DEFAULT: '#0369A1', light: '#38BDF8' },  // Sky 700/400
            }
        },
    },
    plugins: [],
}
