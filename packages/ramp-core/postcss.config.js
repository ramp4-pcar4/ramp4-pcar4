// purgecss stuff is from https://tailwindcss.com/docs/controlling-file-size
const purgecss = require('@fullhuman/postcss-purgecss')({
    // Paths to all of the template files in your project
    content: ['./src/**/*.html', './src/**/*.vue'],

    whitelist: ['xs', 'sm', 'md', 'lg'],

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
        ...(process.env.NODE_ENV === 'production' ? [purgecss] : [purgecss])
    ]
};
