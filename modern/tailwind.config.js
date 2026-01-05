/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Cinzel', 'serif'],
                display: ['Playfair Display', 'serif'],
                sans: ['Lato', 'sans-serif'],
                arabic: ['Amiri', 'serif'],
            },
            colors: {
                'memorial-dark': '#0f0a05',   // Very dark brown/black
                'memorial-brown': '#3b2616',  // Deep rich brown
                'memorial-gold': '#c5a065',   // Standard gold
                'memorial-gold-light': '#e6c891', // Highlight gold
                'memorial-sand': '#f4f1ea',   // Text cream
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
