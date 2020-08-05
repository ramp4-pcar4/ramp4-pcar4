module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // needed to scope tailwind styles
        require('postcss-nested')
    ]
};
