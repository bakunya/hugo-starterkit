const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./site/static/core"),
        filename: "[contenthash].js",
        publicPath: '/core'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader',]
            },
            {
                test: /\.m?js$/i,
                exclude: '/node_modules/**',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[chunkhash].css' }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ 
            filename: '../../layouts/partials/assets/style.html',
            inject: false,
            templateContent: ({ htmlWebpackPlugin }) => 
                htmlWebpackPlugin
                    .tags
                    .headTags
                    .filter(tag => tag.tagName === 'link')
                    .join(''),
        }),
        new HtmlWebpackPlugin({ 
            filename: '../../layouts/partials/assets/script.html',
            inject: false,
            templateContent: ({ htmlWebpackPlugin }) => 
                htmlWebpackPlugin
                    .tags
                    .headTags
                    .filter(tag => tag.tagName === 'script')
                    .join(''),
        }),
    ]
}