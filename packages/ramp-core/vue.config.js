module.exports = {
    chainWebpack: config => {
        config.performance.hints(false);

        // remove the prefetch plugin: stops downloading split code chunks until they are needed
        config.plugins.delete('prefetch');
    }
};
