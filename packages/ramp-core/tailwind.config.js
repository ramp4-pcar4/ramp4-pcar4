const postcss = require('postcss');

// generate spacing rules, these create width, height, padding, margin, etc. rules
// will end up with w-0 = 0px, w-1 = 1px, and so on
spacingConfig = {};
for (i = 0; i < 1000; i++) {
    spacingConfig[i] = `${i}px`;
}

module.exports = {
    purge: {
        // Paths to all of the template files in your project
        content: [
            './src/**/*.html',
            './src/**/*.vue',
            './node_modules/ag-grid-community/dist/styles/ag-grid.css',
            './node_modules/ag-grid-community/dist/styles/ag-theme-material.css'
        ],

        // These options are passed through directly to PurgeCSS
        options: {
            // whitelist ramp shell size classes so they are not purged
            whitelist: ['xs', 'sm', 'md', 'lg']
        }
    },
    theme: {
        // remove all breakpoints because ramp components will depend on the shell size, not the size of the window/page
        screens: {
            // sm: '640px'
        },
        spacing: spacingConfig,
        inset: spacingConfig,
        extend: {
            colors: {
                'black-75': 'rgba(0, 0, 0, 0.75)',
                'white-75': 'rgba(255, 255, 255, 0.75)',
                'grey-test': 'rgba(150,150,150,0.7);'
            },
            boxShadow: {
                tm: '0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 3px 0 rgba(0, 0, 0, 0.1)'
            }
        }
    },
    variants: {
        // https://tailwindcss.com/docs/pseudo-class-variants
        // add the `container-query` variant to all the core plugins which have `responsive` specified (hint: it's all of them)
        alignContent: ['responsive', 'container-query'],
        alignItems: ['responsive', 'container-query'],
        alignSelf: ['responsive', 'container-query'],
        appearance: ['responsive', 'container-query'],
        backgroundAttachment: ['responsive', 'container-query'],
        backgroundColor: ['responsive', 'container-query', 'hover', 'focus', 'even'],
        backgroundPosition: ['responsive', 'container-query'],
        backgroundRepeat: ['responsive', 'container-query'],
        backgroundSize: ['responsive', 'container-query'],
        borderCollapse: ['responsive', 'container-query'],
        borderColor: ['responsive', 'container-query', 'hover', 'focus'],
        borderRadius: ['responsive', 'container-query'],
        borderStyle: ['responsive', 'container-query'],
        borderWidth: ['responsive', 'container-query'],
        boxShadow: ['responsive', 'container-query', 'hover', 'focus'],
        cursor: ['responsive', 'container-query'],
        display: ['responsive', 'container-query'],
        fill: ['responsive', 'container-query'],
        flex: ['responsive', 'container-query'],
        flexDirection: ['responsive', 'container-query'],
        flexGrow: ['responsive', 'container-query'],
        flexShrink: ['responsive', 'container-query'],
        flexWrap: ['responsive', 'container-query'],
        float: ['responsive', 'container-query'],
        fontFamily: ['responsive', 'container-query'],
        fontSize: ['responsive', 'container-query'],
        fontSmoothing: ['responsive', 'container-query'],
        fontStyle: ['responsive', 'container-query'],
        fontWeight: ['responsive', 'container-query', 'hover', 'focus'],
        height: ['responsive', 'container-query'],
        inset: ['responsive', 'container-query'],
        justifyContent: ['responsive', 'container-query'],
        letterSpacing: ['responsive', 'container-query'],
        lineHeight: ['responsive', 'container-query'],
        listStylePosition: ['responsive', 'container-query'],
        listStyleType: ['responsive', 'container-query'],
        margin: ['responsive', 'last', 'container-query', 'first'],
        maxHeight: ['responsive', 'container-query'],
        maxWidth: ['responsive', 'container-query'],
        minHeight: ['responsive', 'container-query'],
        minWidth: ['responsive', 'container-query'],
        objectFit: ['responsive', 'container-query'],
        objectPosition: ['responsive', 'container-query'],
        opacity: ['responsive', 'container-query', 'hover', 'focus'],
        order: ['responsive', 'container-query'],
        outline: ['responsive', 'container-query', 'focus'],
        overflow: ['responsive', 'container-query'],
        padding: ['responsive', 'container-query'],
        pointerEvents: ['responsive', 'container-query'],
        position: ['responsive', 'container-query'],
        resize: ['responsive', 'container-query'],
        stroke: ['responsive', 'container-query'],
        tableLayout: ['responsive', 'container-query'],
        textAlign: ['responsive', 'container-query'],
        textColor: ['responsive', 'container-query', 'hover', 'focus'],
        textDecoration: ['responsive', 'container-query', 'hover', 'focus'],
        textTransform: ['responsive', 'container-query'],
        userSelect: ['responsive', 'container-query'],
        verticalAlign: ['responsive', 'container-query'],
        visibility: ['responsive', 'container-query'],
        whitespace: ['responsive', 'container-query'],
        width: ['responsive', 'container-query'],
        wordBreak: ['responsive', 'container-query'],
        zIndex: ['responsive', 'container-query']
    },
    corePlugins: {
        preflight: true // since all tailwind styles will be scoped under `ramp-app`, it's safe to enable preflight CSS reset
    },
    plugins: [
        function({ addVariant, e }) {
            addVariant('container-query', ({ container, separator }) => {
                // this is a list of possible ramp shell sizes; pixel sizes TBD
                const shellSizes = ['xs', 'sm', 'md', 'lg'];

                const newRules = [];

                // `container` is itself a clone; thanks Tailwind :/
                container.walkRules(rule => {
                    shellSizes.forEach(shellSize => {
                        const newRule = rule.clone(); // clone a rule so not to modify the original clone

                        // prefix shell size selector to the rule; slice the dot from the rule selector
                        // resulting class name is of the form `.[xs|sm|md|lg]:{selector}`
                        newRule.selector = `&.${shellSize} .${shellSize}\\:${newRule.selector.slice(1)}`;
                        newRules.push(newRule);
                    });
                });

                container.append(newRules);
            });
        },
        require('@tailwindcss/custom-forms')
    ]
};
