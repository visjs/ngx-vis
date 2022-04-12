var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    polyfills: helpers.root('demo', 'polyfills.ts'),
    vendor: helpers.root('demo', 'vendor.ts'),
    app: helpers.root('demo', 'index.ts'),
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'ts-loader',
            options: { configFileName: helpers.root('tsconfig.json') },
          },
          'angular2-template-loader',
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./demo'), // location of your src
      {} // a map of your routes
    ),

    new HtmlWebpackPlugin({
      template: helpers.root('demo', 'index.html'),
    }),

    new CopyWebpackPlugin([{ from: helpers.root('demo', 'assets'), to: 'assets' }]),
  ],
};
