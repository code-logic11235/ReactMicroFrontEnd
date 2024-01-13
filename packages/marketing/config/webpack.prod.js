const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      exposes: { // declare which modules or pieces of code within a webpack bundle should be made available for consumption by other applications.
        './MarketingIndex': './src/bootstrap' // the name marketing /MarkingApp we will give them /src/bootstrap
      },
      shared: packageJson.dependencies
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);