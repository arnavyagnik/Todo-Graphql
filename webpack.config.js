
'use strict';

var path = require('path');
// var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'eval-source-map',
  entry: [
    path.join(__dirname, 'index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        "presets": ["es2015"]
      }
    }]
  }
};
