const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.prod.js');
const helpers = require('./helpers');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    path: helpers.root('docs'),
    publicPath: 'https://visjs.github.io/ngx-vis',
    filename: '[name].[fullhash].js',
    chunkFilename: '[id].[fullhash].chunk.js',
  }
});
