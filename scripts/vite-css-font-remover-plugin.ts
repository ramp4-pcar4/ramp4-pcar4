/*
Strips embedded fonts from CSS file

See https://github.com/ramp4-pcar4/ramp4-pcar4/issues/2947 for the WHY

*/

import type { Plugin } from 'vite';

function cssFontRemoverPlugin(): Plugin {
    const esriFontFaceBlock = /@font-face\s*{[^{}]*font-family\s*:\s*["']?["']?[^{}]*}/g;
    const arcgisCssId = /[\\/]node_modules[\\/]@arcgis[\\/].*\.css(?:\?.*)?$/;

    return {
        name: 'css-font-remover',
        enforce: 'pre',
        transform: {
            filter: { id: arcgisCssId },
            handler(code: string, id: string) {
                if (!arcgisCssId.test(id)) {
                    return null;
                }

                const strippedCode = code.replace(esriFontFaceBlock, '');
                return strippedCode === code ? null : { code: strippedCode, map: null };
            }
        }
    };
}

export default cssFontRemoverPlugin;
