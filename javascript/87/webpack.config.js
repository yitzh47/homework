const path = require('path');
const htmlPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: { 
        game_brains: './src/game_brains.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new htmlPlugin({
            template: './src/hw_87.html'
        }
        )
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
                type: 'asset/resource',
            },
        ],
        
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
};