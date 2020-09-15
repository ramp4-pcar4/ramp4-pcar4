const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project
    content: [
        './src/**/*.html',
        './src/**/*.vue',
        './node_modules/ag-grid-community/dist/styles/ag-grid.css',
        './node_modules/ag-grid-community/dist/styles/ag-theme-material.css'
    ],

    whitelist: ['xs', 'sm', 'md', 'lg'],
    whitelistPatternsChildren: [/:focus/, /:hover/],

    // This is the function used to extract class names from your templates
    defaultExtractor: content => {
        // Capture as liberally as possible, including things like `h-(screen-1.5)`
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

        // Capture classes within other delimiters like .block(class="w-1/2") in Pug
        const innerMatches = content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) || [];

        return broadMatches.concat(innerMatches);
    }
});

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // needed to scope tailwind styles
        require('postcss-nested'),

        // css purge must happen after `postcss-nested`
        // when using tailwind's built-in purge, it happens immediately after and before `postcss-nested`
        // and all the nested classes like `.ramp-app.sm .sm:{selector}` will get dropped
        ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
    ]
};
