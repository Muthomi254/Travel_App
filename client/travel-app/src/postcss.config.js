module.exports = {
    plugins: [
        require('postcss-nested'), // Ensure this comes before Tailwind CSS
        require('tailwindcss'),
        // Other plugins...
    ]
}
