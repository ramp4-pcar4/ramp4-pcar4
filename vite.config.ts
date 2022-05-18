import { defineConfig, type UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePluginI18n from './scripts/vite-plugin-i18n';
import VitePluginVersion from './scripts/vite-plugin-version';
import { resolve } from 'path';

const baseConfig: UserConfigExport = {
    plugins: [vue(), VitePluginI18n(), VitePluginVersion()],
    base: './',
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    },
    server: {
        open: '/demos/index.html'
    }
};

export default defineConfig(({ command, mode }) => {
    if (command == 'build') {
        if (mode === 'production') {
            baseConfig.build = {
                lib: {
                    entry: resolve(__dirname, 'src/main.ts'),
                    name: 'RAMP',
                    fileName: format => `ramp.${format}.js`,
                    formats: ['es', 'umd', 'iife']
                },
                rollupOptions: {
                    output: {
                        inlineDynamicImports: true,
                        dir: 'dist/samples/lib'
                    }
                }
            };
        } else {
            baseConfig.publicDir = false;
            baseConfig.root = 'demos';
            baseConfig.build = {
                outDir: resolve(__dirname, 'dist/demos'),
                rollupOptions: {
                    input: {
                        main: '/index.html'
                    }
                },
                minify: 'esbuild',
                target: 'esnext'
            };
        }
    } else {
        // preview mode
        if (mode === 'production') {
            baseConfig.server!.open = '/samples/index.html';
        }
    }
    return baseConfig;
});
