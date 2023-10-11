var webpack = require('webpack');
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularWebpackPlugin;

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
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack',
        exclude: [/\.e2e\.ts$/],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[fullhash].[ext]',
        },
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

    new CopyWebpackPlugin({ patterns: [
      { from: helpers.root('demo', 'assets'), to: 'assets' }
    ]}),

    new AngularCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: './demo/demo.module.ts#AppModule',
    }),
  ],
};
