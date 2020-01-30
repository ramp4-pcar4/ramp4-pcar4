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
    }
};
