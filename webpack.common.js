const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {

    entry: './src/index.tsx',

    output: {
        filename: '[name].[contenthash].js',
        path: path.join(__dirname, 'dist'),
        publicPath: "/infohelpmobile/",
    },
    
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico"
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        plugins: [
            new TsconfigPathsPlugin(),
        ]
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", { "runtime": "automatic" }],
                            "@babel/preset-typescript",
                        ],
                    }
                }
            },
            {
                test: /\.(jpg|jpeg|png|svg|ico)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },

        ]
    },
};


