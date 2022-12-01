/*
  webpack
  Module Bundler
  https://webpack.github.io/

  This is the processing config for webpack.
*/

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './_/js/app/index.js',
  output: {
    filename: '[name].js',
    path: __dirname + '/_/js/build/'
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        options: {
          presets: ['es2015', 'react'],
          retainLines: true
        },
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "ng-cache?prefix=[dir]/[dir]" // Templates must be imported in the script files to allow for proper use of this loader.
      },
      {
        test: /\.scss$/,
        loaders: [
          "style",
          "css?sourceMap",
          "sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true"
        ]
      },
    ]
  }
};