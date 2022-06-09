import { defineConfig, type UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePluginI18n from './scripts/vite-plugin-i18n';
import VitePluginVersion from './scripts/vite-plugin-version';
import { resolve } from 'path';

const distName = resolve(__dirname, process.env.DIST_NAME || 'dist');

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
                outDir: `${distName}`,
                lib: {
                    entry: resolve(__dirname, 'src/main.ts'),
                    name: 'RAMP',
                    fileName: format =>
                        `ramp.${format == 'iife' ? 'global' : format}.js`,
                    formats: ['es', 'iife']
                },
                rollupOptions: {
                    output: {
                        inlineDynamicImports: true,
                        dir: `${distName}/lib`
                    }
                }
            };
        } else {
            baseConfig.publicDir = false;
            baseConfig.root = 'demos';
            baseConfig.build = {
                outDir: `${distName}/demos`,
                rollupOptions: {
                    input: {
                        main: '/index.html',
                        multi: '/index-multi.html'
                    }
                },
                minify: 'esbuild',
                target: 'esnext'
            };
        }
    } else {
        // preview mode
        if (mode === 'production') {
            baseConfig.server!.open = '/index.html';
        }
    }
    return baseConfig;
});
