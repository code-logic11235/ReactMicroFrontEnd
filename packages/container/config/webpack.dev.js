const {merge} = require ('webpack-merge'); // merge 2 different webpack config. ex. 'webpack.common.js' merge it with this one "webpack.dev.js"
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require ('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: { // use for client side routing usefullfor single page apps when a route fails client side it will redirect here 
            index: 'index.html',
            rewrites: [
                { from: /^\/subpager/, to: './public/indexError.html' }, // when you hit subpager it will load index error.html
                { from: /./, to: './public/indexAnywhereElse.html' }, //anywhere else 
              ],
        }
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './public/index.html'
        }), 
        new ModuleFederation({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
                // cartApp: 'cart@http://localhost:8082/remoteEntry.js',

            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig); //  putting dev config seccond it will override common config