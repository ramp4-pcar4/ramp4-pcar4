module.exports = {
    purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        // remove all breakpoints because ramp components will depend on the shell size, not the size of the window/page
        screens: {
            // sm: '640px'
        },
        spacing: {
            '-36': '-36px',
            '-32': '-32px',
            '-30': '-30px',
            '-2': '-2px',
            '0': '0px',
            '1': '1px',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '5': '5px',
            '6': '6px',
            '7': '7px',
            '8': '8px',
            '9': '9px',
            '10': '10px',
            '12': '12px',
            '14': '14px',
            '15': '15px',
            '16': '16px',
            '18': '18px',
            '20': '20px',
            '24': '24px',
            '25': '25px',
            '26': '26px',
            '28': '28px',
            '30': '30px',
            '32': '32px',
            '36': '36px',
            '38': '38px',
            '40': '40px',
            '44': '44px',
            '48': '48px',
            '56': '56px',
            '64': '64px',
            '75': '75px',
            '80': '80px',
            '100': '100px',
            '116': '116px',
            '160': '160px',
            '180': '180px',
            '192': '192px',
            '230': '230px',
            '256': '256px',
            '500': '500px'
        },
        extend: {
            inset: {
                '-9': '-9px',
                '1': '1px',
                '32': '32px',
                '64': '64px',
                '200': '200px',
                '1/2': '50%',
                full: '100%'
            },
            colors: {
                'black-75': 'rgba(0, 0, 0, 0.75)',
                'white-75': 'rgba(255, 255, 255, 0.75)',
                'grey-test': 'rgba(150,150,150,0.7);'
            },
            boxShadow: {
                tm:
                    '0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 3px 0 rgba(0, 0, 0, 0.1)'
            }
        }
    },
    variants: {
        extend: {
            alignContent: ['responsive', 'container-query'],
            alignItems: ['responsive', 'container-query'],
            alignSelf: ['responsive', 'container-query'],
            appearance: ['responsive', 'container-query'],
            backgroundAttachment: ['responsive', 'container-query'],
            backgroundColor: [
                'responsive',
                'container-query',
                'hover',
                'focus',
                'even',
                'disabled'
            ],
            backgroundPosition: ['responsive', 'container-query'],
            backgroundRepeat: ['responsive', 'container-query'],
            backgroundSize: ['responsive', 'container-query'],
            borderCollapse: ['responsive', 'container-query'],
            borderColor: ['responsive', 'container-query', 'hover', 'focus'],
            borderRadius: ['responsive', 'container-query'],
            borderStyle: ['responsive', 'container-query'],
            borderWidth: ['responsive', 'container-query'],
            boxShadow: ['responsive', 'container-query', 'hover', 'focus'],
            cursor: ['responsive', 'container-query', 'disabled'],
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
            opacity: [
                'responsive',
                'container-query',
                'hover',
                'focus',
                'disabled'
            ],
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
            textColor: [
                'responsive',
                'container-query',
                'hover',
                'focus',
                'disabled'
            ],
            textDecoration: ['responsive', 'container-query', 'hover', 'focus'],
            textTransform: ['responsive', 'container-query'],
            userSelect: ['responsive', 'container-query'],
            verticalAlign: ['responsive', 'container-query'],
            visibility: ['responsive', 'container-query'],
            whitespace: ['responsive', 'container-query'],
            width: ['responsive', 'container-query'],
            wordBreak: ['responsive', 'container-query'],
            zIndex: ['responsive', 'container-query']
        }
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
                        newRule.selector = `&.${shellSize} .${shellSize}\\:${newRule.selector.slice(
                            1
                        )}`;
                        newRules.push(newRule);
                    });
                });

                container.append(newRules);
            });
        },
        require('@tailwindcss/forms')
    ]
};
