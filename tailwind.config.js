/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                aref: ["Aref Ruqaa Ink", "sans-serif"],
                playfair: ["Playfair Display", "sans-serif"],
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
