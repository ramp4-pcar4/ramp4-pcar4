/* eslint-env node */
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
    plugins: [postcssImport, postcssNested, tailwindcss, autoprefixer]
};
