const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'css-loader', options: { sourceMap: true } },
          {
            loader: 'resolve-url-loader',
          },

        ],
      },
      {
        test: /\.(gif|jpe?g|png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
          }
        ]
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: "./index.html"
    }),
  ],
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 8080,
    hot: true,
  }
};