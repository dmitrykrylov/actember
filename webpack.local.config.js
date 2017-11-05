const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');


baseConfig.entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  './frontend/index.js',
];

baseConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin());


module.exports = baseConfig;
