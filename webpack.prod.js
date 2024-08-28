const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = {
    mode: "production",
    entry: {
        index: './src/index.js',
        // print: './src/print.js',
    },
    devtool: 'inline-source-map',
    // The webpack-dev-server provides you with a rudimentary web server and the ability to use live reloading. 
    // This tells webpack-dev-server to serve the files from the dist directory on localhost:8080
    devServer: {
        static: './dist',
    },
    plugins: [
        // Before we do a build, you should know that the HtmlWebpackPlugin by default
        //  will generate its own index.html file, even though we already have one in 
        // the dist/ folder.This means that it will replace our index.html file with a newly generated one.
        new HtmlWebpackPlugin({
            title: 'Siomai King San Miguel',
            filename: "index.html",
            chucks: ['index'],
        }),

        new NodePolyfillPlugin()
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    // optimization: {
    //     runtimeChunk: 'single',
    // },
    // The optimization.runtimeChunk: 'single' was added because in this example we have more than 
    // one entrypoint on a single HTML page. Without this, we could get into trouble 
    module: {
        rules: [
            // 
            {
                // for bundling css files. anything with .css will be detected. 
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                // module loaders are chained, this arrangement is in convention. 
            },
            {

                // for bundling image files, anything with the following extensions.
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                // loading fonts!
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],

    },
};