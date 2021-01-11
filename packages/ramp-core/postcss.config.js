module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        'postcss-nested': {}
    },
    safelist: {
        standard: ['xs', 'sm', 'md', 'lg'],
        deep: [/:focus/, /:hover/]
    }
};
