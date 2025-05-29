import { defineConfig, mergeConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import vue from '@vitejs/plugin-vue';
import VitePluginI18n from './scripts/vite-plugin-i18n';
import VitePluginVersion from './scripts/vite-plugin-version';
import ViteMinifyEsPlugin from './scripts/vite-minify-es-plugin';
import { resolve } from 'path';
import pkg from './package.json';
import dts from 'vite-plugin-dts';

const distName = resolve(__dirname, process.env.DIST_NAME || 'dist');

const baseConfig = {
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: tag => tag.startsWith('arcgis-')
                }
            }
        }),
        VitePluginI18n(),
        VitePluginVersion(),
        mkcert()
    ],
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
        target: 'esnext',
        emptyOutDir: false,
        outDir: distName,
        sourcemap: false,
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'RAMP',
            cssFileName: 'ramp'
        }
    },
    server: {
        open: '/demos/enhanced-samples.html',
        https: true
    }
} as Record<string, any>;

function inlineConfig() {
    return mergeConfig(baseConfig, {
        build: {
            sourcemap: true,
            lib: {
                fileName: (format: string) => `ramp.browser.${format}.js`,
                formats: ['es', 'iife']
            },
            rollupOptions: {
                output: {
                    inlineDynamicImports: true
                }
            }
        }
    });
}

function esDynamicConfig() {
    const config = mergeConfig(baseConfig, {
        build: {
            outDir: `${distName}/esDynamic`,
            copyPublicDir: false,
            sourcemap: true,
            lib: {
                fileName: `ramp`,
                formats: ['es']
            }
        },
        esbuild: { legalComments: 'none' }
    });
    config.plugins.push(ViteMinifyEsPlugin());
    return config;
}

function npmBundleConfig() {
    const externalImports = Object.keys(pkg.dependencies).map(dep => new RegExp(`^${dep}`));

    const config = mergeConfig(baseConfig, {
        build: {
            outDir: `${distName}/bundler`,
            copyPublicDir: false,
            lib: {
                fileName: 'ramp.bundle.es',
                formats: ['es']
            },
            rollupOptions: {
                external: externalImports
            }
        }
    });
    config.plugins.push(dts({ tsconfigPath: './tsconfig.app.json' }));
    return config;
}

function testBuildConfig() {
    delete baseConfig.build.rollupOptions;
    delete baseConfig.build.lib;

    const config = mergeConfig(baseConfig, {
        publicDir: false,
        root: 'demos',
        build: {
            outDir: `${distName}/demos`,
            rollupOptions: {
                input: {
                    main: '/index.html',
                    multi: '/index-multi.html',
                    e2e: '/index-e2e.html',
                    wet: '/index-wet.html',
                    enhancedSamples: '/enhanced-samples.html',
                    enhancedAll: '/enhanced-all.html',
                    samples: '/index-samples.html',
                    all: '/index-all.html',
                    qaSamples: '/qa-samples.html',
                    qaAll: '/qa-all.html',
                    form: '/index-form.html',
                    teleport: '/index-teleport.html',
                    teleportWet: '/index-teleport-wet.html',
                    teleportDetails: '/index-teleport-details.html',
                    multiWet: '/index-multi-wet.html'
                }
            }
        }
    });

    return config;
}

export default defineConfig(viteConfig => {
    const { command, mode } = viteConfig;
    if (command === 'build') {
        if (mode === 'npm') {
            return npmBundleConfig();
        } else if (mode === 'esDynamic') {
            return esDynamicConfig();
        } else if (mode === 'inline') {
            return inlineConfig();
        } else {
            return testBuildConfig();
        }
    } else {
        return baseConfig;
    }
});
