const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    // compile fixture separately
    entry: {
        mouruge: './src/mouruge/main.ts',
        iklob: './src/iklob/main.ts',
        diligord: './src/diligord/diligord-fixture.js'
    },
    output: {
        publicPath: '/dist/',
        filename: '[name]-fixture.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    },
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        scss: 'vue-style-loader!css-loader!sass-loader',
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [new VueLoaderPlugin(), new CopyPlugin([{ from: 'src/diligord/', to: './' }])],
    externals: {
        // define module 'vue' which will point to window.Vue in result bundle
        vue: 'Vue'
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json']
    },
    performance: {
        hints: false
    },
    optimization: {
        minimize: false
    },
    devtool: 'source-map'
};
