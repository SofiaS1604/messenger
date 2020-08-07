const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const {CleanWebpackPlugin}  = require("clean-webpack-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.join(__dirname, `src`, `index.js`),
    mode: 'development',
    output: {
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: `vue-loader`,
                        options: {
                            transformAssetUrls: {
                                source: './src/'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['css-loader']
            },
            {
                test: /\.js$/,
                loader: `babel-loader`,
                include: [path.join(__dirname, `src`)]
            },
            {
                test: /\.styl/,
                use: [
                    {
                        loader: `style-loader`
                    },
                    {
                        loader: `css-loader`
                    },
                    {
                        loader: `stylus-loader`
                    }
                ]
            },
            {
                test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani|eot|svg)$/,
                loader: `url-loader`,
                options: {
                    name: `[name].[hash:20].[ext]`,
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, `public`, `index.html`),
            inject: true,
            env: "development",
            hash: true,
            minify: false
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
}