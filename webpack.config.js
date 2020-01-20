const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const myPostCssPlugins = [require('postcss-simple-vars'),require('postcss-nested'),require('autoprefixer')];

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        filename: 'public/bundled.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader'}
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', {loader: 'postcss-loader', options: {plugins: myPostCssPlugins}}]
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({filename: 'index.html', template: './src/index.html'})
    ]
}