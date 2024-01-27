const {merge} = require ('webpack-merge'); // merge 2 different webpack config. ex. 'webpack.common.js' merge it with this one "webpack.dev.js"
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require ('./webpack.common');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json');
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './public/index.html'
        }),
        new ModuleFederation({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingIndex': './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig); //  putting dev config seccond it will override common config