const webpack = require('webpack');
const WrapperPlugin = require('wrapper-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const childProcess = require('child_process');
const pkg = require('./package.json');

module.exports = {
    configureWebpack: {
        output: {
            libraryExport: 'default'
        },

        optimization: {
            splitChunks: {
                // increase the minimum size of the chunk to 300kb
                // without this, webpack tries to break up larger fixtures into chunks
                // since we already using dynamic imports to split panel screen components into separate chunks, there is no need to break them up further based on their size
                minSize: 300000
            },
            minimize: false // to build an unminified production build, uncomment the following
        }
    },
    chainWebpack: config => {
        config.performance.hints(false);

        // remove the prefetch plugin: stops downloading split code chunks until they are needed
        config.plugins.delete('prefetch');

        // load csv files (used for translations)
        const csvRule = config.module.rule('dsv');

        csvRule.uses.clear();
        csvRule
            .test(/lang\.csv$/)
            .use('ramp-locale-loader')
            .loader('ramp-locale-loader');

        // load xsl files (for metadata fixture)
        const xslRule = config.module.rule('loadxsl');
        xslRule.uses.clear();

        xslRule
            .test(/\.xsl$/)
            .use('raw-loader')
            .loader('raw-loader');

        // add an automatic callback to execute `initRAMP` global function if it's defined as soon at the RAMP library is added to the global scope
        // this only applies to the production build; dev build calls this function from `main-serve.ts`
        config.plugin('wrapper-plugin').use(WrapperPlugin, [
            {
                test: /RAMP.umd.js/, // only wrap output of bundle files with '.js' extension,
                footer: "RAMP.gapiPromise.then(function() { if (typeof initRAMP === 'function') { initRAMP(); }});",
                afterOptimization: true
            }
        ]);

        // copy over external fixture samples
        config
            .plugin('webpack-copy-plugin')
            .use(CopyPlugin, [[{ from: 'node_modules/ramp-sample-fixtures/dist/', to: 'sample-fixtures' }]]);

        // modify the default injection point from 'body' to 'head', so it's easier to orchestrate the loading order; only when `serve`ing
        config.when(process.env.NODE_ENV === 'development', config => {
            config.plugin('html').tap(args => [{ ...args[0], inject: 'head' }]);
        });

        // copy `ramp-starter.js` to `dist` folder when building prod build
        config.when(process.env.NODE_ENV === 'production', config => {
            config.plugin('webpack-copy-plugin').tap(args => [[...args[0], { from: 'public/ramp-starter.js', to: '' }]]);
        });

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
