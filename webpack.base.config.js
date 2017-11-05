const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: [
    // defined in local or prod
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('frontend/dist'),
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: /node_modules/,
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              optipng: {
                optimizationLevel: 4,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'frontend'),  // New
    historyApiFallback: true,
    publicPath: '/',
    port: 3000,
  },
};
