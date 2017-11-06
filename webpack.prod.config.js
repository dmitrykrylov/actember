const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const path = require('path');
const baseConfig = require('./webpack.base.config');


baseConfig.entry = ['./frontend/index.js'];

baseConfig.output = {
  filename: '[name]-[hash].js',
  path: path.resolve('./frontend/dist/'),
  publicPath: '/static/',
};

baseConfig.plugins.push(new BundleTracker({ filename: './webpack-stats.json' }));

module.exports = baseConfig;
