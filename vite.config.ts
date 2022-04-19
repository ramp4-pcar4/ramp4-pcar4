import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePluginI18n from './scripts/vite-plugin-i18n';
import VitePluginVersion from './scripts/vite-plugin-version';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    root: './public/',
    plugins: [vue(), VitePluginI18n(), VitePluginVersion()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    build: {
        outDir: '../dist'
        // rollupOptions: {
        //     input: {
        //         main: resolve(__dirname, 'public/index.html')
        //         //nested: resolve(__dirname, 'nested/index.html')
        //     }
        // }
    }
});
