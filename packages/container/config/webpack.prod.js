const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js', // change how our files getnamesd after bundling with webpack
    publicPath: '/container/latest/' // prepend filename output 
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: { // where we go to get our source code // where to go to get remoteEntry .js file
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`, // domain is using a evironment variable so it become more dynamic on different environment 
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);