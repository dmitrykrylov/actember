const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader?sourceMap',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, './client'),  // New
    historyApiFallback: true,
    publicPath: '/',
  },
};
