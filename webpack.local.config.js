const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const path = require('path');


baseConfig.entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  './frontend/index.js',
];

baseConfig.output = {
  filename: 'bundle.js',
  path: path.resolve('./frontend/dist/'),
  publicPath: '',
};

baseConfig.plugins.unshift(new webpack.NamedModulesPlugin());
baseConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin());


baseConfig.devServer = {
  hot: true,
  contentBase: path.resolve(__dirname, 'frontend'),
  historyApiFallback: true,
  publicPath: '/',
  port: 3000,
};


module.exports = baseConfig;
