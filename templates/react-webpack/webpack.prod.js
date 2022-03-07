const {merge} = require('webpack-merge');
const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.config');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify('https://lego-90th-photo-app.bricks.plus/'),
        }),
    ],
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()],
    },
});
