const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        js: './src/quiz.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new htmlPlugin({
            template: './src/quiz.html'
        }
        )
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
};

