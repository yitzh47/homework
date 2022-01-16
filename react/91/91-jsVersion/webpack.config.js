const path =  require('path');
const htmlPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
    },
    plugins: [
        new htmlPlugin({
            template: './src/hw-91.html'
        }
        )
    ],
    
}