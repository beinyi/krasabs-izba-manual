const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        open: ['http://localhost:3000/infohelpmobile'],
        hot: true,
        historyApiFallback: {
                index: '/infohelpmobile/index.html',
        }
    }
});