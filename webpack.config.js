const path = require('path')
const webpack = require('webpack')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        react: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dll'),
        filename: 'dll_[name].js',
        library: 'dll_[name]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            name: 'dll_[name]',
            path: path.resolve(__dirname, './dll/[name].manifest.json')
        })
    ],
    optimization: {
        minimizer: [
            // use this to remove LiLICLICENSE.txt
            new TerserWebpackPlugin({
                extractComments: false
            })
        ]
    }
}