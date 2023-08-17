/* eslint-env node */
const plugin = require('tailwindcss/plugin');
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        // remove all breakpoints because ramp components will depend on the shell size, not the size of the window/page
        screens: {
            // sm: '640px'
        },
        fontSize: {
            xs: ['12px', '16px'],
            sm: ['14px', '20px'],
            base: ['16px', '24px'],
            lg: ['18px', '28px'],
            xl: ['20px', '28px'],
            '2xl': ['24px', '32px'],
            '3xl': ['30px', '36px'],
            '4xl': ['36px', '40px'],
            '5xl': '48px',
            '6xl': '60px',
            '7xl': '72px',
            '8xl': '96px',
            '9xl': '128px'
        },
        spacing: {
            '-36': '-36px',
            '-32': '-32px',
            '-30': '-30px',
            '-2': '-2px',
            0: '0px',
            1: '1px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
            6: '6px',
            7: '7px',
            8: '8px',
            9: '9px',
            10: '10px',
            12: '12px',
            14: '14px',
            15: '15px',
            16: '16px',
            18: '18px',
            20: '20px',
            24: '24px',
            25: '25px',
            26: '26px',
            28: '28px',
            30: '30px',
            32: '32px',
            36: '36px',
            38: '38px',
            40: '40px',
            42: '42px',
            44: '44px',
            46: '46px',
            48: '48px',
            56: '56px',
            64: '64px',
            75: '75px',
            80: '80px',
            100: '100px',
            116: '116px',
            160: '160px',
            180: '180px',
            192: '192px',
            230: '230px',
            256: '256px',
            500: '500px'
        },
        extend: {
            inset: {
                '-9': '-9px',
                1: '1px',
                32: '32px',
                64: '64px',
                200: '200px',
                '1/2': '50%',
                '9/20': '45%',
                full: '100%'
            },
            colors: {
                'black-75': 'rgba(0, 0, 0, 0.75)',
                'white-75': 'rgba(255, 255, 255, 0.75)',
                'grey-test': 'rgba(150,150,150,0.7);'
            },
            boxShadow: {
                tm: '0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 3px 0 rgba(0, 0, 0, 0.1)'
            },
            cursor: {
                grab: 'grab'
            }
        }
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('xs', '.xs &');
            addVariant('sm', '.sm &');
            addVariant('md', '.md &');
            addVariant('lg', '.lg &');
        }),
        require('@tailwindcss/forms')({
            strategy: 'base' // only generate global styles
        })
    ]
};
