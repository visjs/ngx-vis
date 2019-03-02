var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.prod.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  output: {
    path: helpers.root('docs'),
    publicPath: 'https://hypery2k.github.io/ngx-vis',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  }
});
