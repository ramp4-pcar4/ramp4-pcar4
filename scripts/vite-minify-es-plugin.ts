// Vite doesn't yet handle the case for es builds in library mode for native only imports. It assumes there will always be a bundler involved, so it leaves the output partially unminified (things like pure annotations that are required by bundlers).
// This plugin ensures esbuild minifies the output of the esDynamic build since it is only used in a native only import scenario.
// see: https://github.com/vitejs/vite/issues/6555

// as of Vite 8, switching to use rolldown instead of esbuild. But same problem and solution.

import type { Plugin } from 'vite';
import { minify } from 'rolldown/utils';

export default function minifyEsDynamic(): Plugin {
    return {
        name: 'minify-es-dynamic',
        async generateBundle(_, bundle) {
            for (const asset of Object.values(bundle)) {
                if (asset.type == 'chunk')
                    asset.code = (await minify(asset.fileName, asset.code, { compress: true })).code;
            }
        }
    };
}
