/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            container: {
                // padding: {
                //     DEFAULT: '0.3rem', // Padding predeterminado para todos los tamaños
                //     sm: '1rem',
                //     md: '0',
                // },
            },
        },
    },
    plugins: [],
}
