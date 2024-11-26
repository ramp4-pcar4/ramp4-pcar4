// This plugin removes comments and empty lines from the generated code in the esDynamic output directory to reduce the bundle size.
import type { Plugin } from 'vite';

export default function removeCommentsPlugin(): Plugin {
    return {
        name: 'remove-comments',
        apply: 'build',
        generateBundle(options, bundle) {
            // Check if we're in esDynamic mode by looking at output path
            const isEsDynamic = options.dir?.includes('esDynamic');

            if (!isEsDynamic) {
                return;
            }

            // Process each chunk in the bundle
            Object.keys(bundle).forEach(fileName => {
                const chunk = bundle[fileName];

                if (chunk.type === 'chunk' && chunk.code) {
                    chunk.code = chunk.code
                        // (?<!["'`]\s*) - Negative lookbehind to ensure we're not inside an expression like console.log('// ----- keep this comment')
                        .replace(/(?<!["'`]\s*)\/\*{2}[\s\S]*?\*\//g, '') // Remove block comments outside quotes
                        // (?<!https?:)(?<![:/]) - Negative lookbehind to ensure we're not targeting URLs or protocol-relative URLs
                        .replace(/(?<!["'`]\s*)(?<!https?:)(?<![:/])\/\/\s.*/g, '') // Remove line comments
                        .replace(/(?<!["'`]\s*)^\s*[\r\n]/gm, ''); // Remove empty lines outside quotes
                }
            });
        }
    };
}
