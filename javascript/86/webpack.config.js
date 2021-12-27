const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");

const handler = (percentage, message, ...args) => {
    console.info(`${(percentage * 100).toFixed(0)}% complete`, message, ...args);
};

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'HW86',
        template: './src/index.html'
    }),
    new CompressionPlugin(),
    new webpack.BannerPlugin("hi"),
    new webpack.ProgressPlugin(handler)

    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
}