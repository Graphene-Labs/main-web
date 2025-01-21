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
                screens: {
                    sm: '600px', // Cambiar de 640px a 600px
                    md: '750px', // Cambiar de 768px a 750px
                    lg: '980px', // Cambiar de 1024px a 980px
                    xl: '1200px', // Cambiar de 1280px a 1200px
                    '2xl': '1400px', // Cambiar de 1536px a 1400px
                },
            },
        },
    },
    plugins: [],
}
