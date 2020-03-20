// purgecss stuff is from https://tailwindcss.com/docs/controlling-file-size
const purgecss = require('@fullhuman/postcss-purgecss')({
    // Paths to all of the template files in your project
    content: ['./src/**/*.html', './src/**/*.vue', './node_modules/ag-grid-community/dist/styles/ag-grid.css', './node_modules/ag-grid-community/dist/styles/ag-theme-material.css'],

    whitelist: ['xs', 'sm', 'md', 'lg'], // whitelist ramp shell size classes so they are not purged

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // needed to scope tailwind styles
        require('postcss-nested'),
        // needed to cut down on css file size, tailwind is very large without any trimming
        ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
    ]
};
