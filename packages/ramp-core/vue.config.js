const webpack = require('webpack');
const WrapperPlugin = require('wrapper-webpack-plugin');

const childProcess = require('child_process');
const pkg = require('./package.json');

module.exports = {
    configureWebpack: {
        output: {
            libraryExport: 'default'
        },

        optimization: {
            minimize: false // to build an unminified production build, uncomment the following
        }
    },
    chainWebpack: config => {
        config.performance.hints(false);

        // remove the prefetch plugin: stops downloading split code chunks until they are needed
        config.plugins.delete('prefetch');

        // load csv files (used for translations)
        config.module
            .rule('dsv')
            .test(/\.csv$/)
            .use('dsv-loader')
            .loader('dsv-loader');

        // add an automatic callback to execute `initRAMP` global function if it's defined as soon at the RAMP library is added to the global scope
        // this only applies to the production build; dev build calls this function from `main-serve.ts`
        config.plugin('wrapper-plugin').use(WrapperPlugin, [
            {
                test: /RAMP.umd.js/, // only wrap output of bundle files with '.js' extension,
                footer: "RAMP.gapiPromise.then(function() { if (typeof initRAMP === 'function') { initRAMP(); }});",
                afterOptimization: true
            }
        ]);

        // get version numbers
        const [major, minor, patch] = pkg.version.split('.');
        // get the hash of the current commit
        const hash = JSON.stringify(
            childProcess
                .execSync('git rev-parse HEAD')
                .toString()
                .trim()
        );

        // inject version information into the bundle
        config.plugin('version').use(webpack.DefinePlugin, [
            {
                __VERSION__: {
                    major,
                    minor,
                    patch,
                    timestamp: Date.now(),
                    hash
                }
            }
        ]);
    },
    css: {
        loaderOptions: {
            postcss: {
                config: {
                    path: './postcss.config.js'
                }
            }
        }
    }
};
