const webpack = require('webpack');
const WrapperPlugin = require('wrapper-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const childProcess = require('child_process');
const pkg = require('./package.json');

module.exports = {
    pages: {
        index: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            filename: 'index.html'
        },
        test: {
            entry: 'src/main.ts',
            template: 'public/index-e2e.html',
            filename: 'index-e2e.html'
        },
        wet: {
            entry: 'src/main.ts',
            template: 'public/index-wet.html',
            filename: 'index-wet.html'
        }
    },
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
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                return {
                    ...options
                };
            });

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

        // copy over external fixture samples
        config.plugin('webpack-copy-plugin').use(CopyPlugin, [
            [
                {
                    from: 'node_modules/ramp-sample-fixtures/dist/',
                    to: 'sample-fixtures'
                }
            ]
        ]);

        // DEV-specific configuration
        config.when(process.env.VUE_APP_BUILD_TARGET !== 'lib', config => {
            // modify the default injection point from 'body' to 'head', so it's easier to orchestrate the loading order; only when `serve`ing or `test`ing
            config.plugin('html-index').tap(args => [{ ...args[0], inject: 'head' }]);
            config.plugin('html-test').tap(args => [{ ...args[0], inject: 'head' }]);
            config.plugin('html-wet').tap(args => [{ ...args[0], inject: 'head' }]);
        });

        // PROD-specific configuration
        config.when(process.env.NODE_ENV === 'production', config => {
            // copy `ramp-starter.js` to `dist` folder when building prod build
            config
                .plugin('webpack-copy-plugin')
                .tap(args => [[...args[0], { from: 'public/alternate.js', to: '' }]]);
            config
                .plugin('webpack-copy-plugin')
                .tap(args => [[...args[0], { from: 'public/ramp-starter.js', to: '' }]]);
            config.plugin('webpack-copy-plugin').tap(args => [
                [
                    ...args[0],
                    {
                        from: 'public/starter-scripts/',
                        to: './starter-scripts/'
                    }
                ]
            ]);
            config
                .plugin('webpack-copy-plugin')
                .tap(args => [[...args[0], { from: 'public/help', to: 'help' }]]);
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
