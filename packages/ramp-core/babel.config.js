module.exports = {
    // do not include any polyfills since it's a library
    // https://cli.vuejs.org/guide/browser-compatibility.html#polyfills-when-building-as-library-or-web-components
    presets: [['@vue/cli-plugin-babel/preset', { useBuiltIns: false }]]
};
