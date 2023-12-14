const {merge} = require ('webpack-merge'); // merge 2 different webpack config. ex. 'webpack.common.js' merge it with this one "webpack.dev.js"
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require ('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './public/index.html'
        }), 
        new ModuleFederation({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntryMarketing.js',
                // cartApp: 'cart@http://localhost:8082/remoteEntry.js',

            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig); //  putting dev config seccond it will override common config