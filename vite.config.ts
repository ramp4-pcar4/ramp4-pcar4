import { defineConfig, type UserConfigExport } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import vue from '@vitejs/plugin-vue';
import VitePluginI18n from './scripts/vite-plugin-i18n';
import VitePluginVersion from './scripts/vite-plugin-version';
import { resolve } from 'path';

const distName = resolve(__dirname, process.env.DIST_NAME || 'dist');

const baseConfig: UserConfigExport = {
    plugins: [vue(), VitePluginI18n(), VitePluginVersion(), mkcert()],
    define: {
        'process.env': process.env
    },
    base: './',
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    },
    build: {
        target: 'esnext'
    },
    server: {
        open: '/demos/index-samples.html',
        https: true
    }
};

export default defineConfig(({ command, mode }) => {
    if (command == 'build') {
        if (mode === 'production') {
            Object.assign(baseConfig.build!, {
                outDir: distName,
                lib: {
                    entry: resolve(__dirname, 'src/main.ts'),
                    name: 'RAMP',
                    fileName: (format: string) =>
                        `lib/ramp${format == 'iife' ? '' : '.esm'}.js`,
                    formats: ['es', 'iife']
                },
                rollupOptions: {
                    output: {
                        inlineDynamicImports: true,
                        dir: distName,
                        assetFileNames: (assetInfo: any) => {
                            return assetInfo.name === 'style.css'
                                ? 'lib/ramp.css'
                                : assetInfo.name;
                        }
                    }
                }
            });
        } else {
            baseConfig.publicDir = false;
            baseConfig.root = 'demos';
            Object.assign(baseConfig.build!, {
                outDir: `${distName}/demos`,
                rollupOptions: {
                    input: {
                        main: '/index.html',
                        multi: '/index-multi.html',
                        e2e: '/index-e2e.html',
                        wet: '/index-wet.html',
                        samples: '/index-samples.html',
                        all: '/index-all.html',
                        form: '/index-form.html'
                    }
                }
            });
        }
    } else {
        // preview mode
        if (mode === 'production') {
            baseConfig.server!.open = '/index.html';
        }
    }
    return baseConfig;
});
