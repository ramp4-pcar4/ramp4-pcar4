const WrapperPlugin = require('wrapper-webpack-plugin');

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

        // add an automatic callback to execute `initRAMP` global function if it's defined as soon at the RAMP library is added to the global scope
        // this only applies to the production build; dev build calls this function from `main-serve.ts`
        config.plugin('wrapper-plugin').use(WrapperPlugin, [
            {
                test: /RAMP.umd.js/, // only wrap output of bundle files with '.js' extension,
                footer: "RAMP.gapiPromise.then(function() { if (typeof initRAMP === 'function') { initRAMP(); }});",
                afterOptimization: true
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
