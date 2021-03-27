const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'ui', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  experiments: {
    asset: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        type: 'asset'
      }
    ]
  },
  // add a custom index.html as the template
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'ui', 'public', 'index.html') }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/ui/public',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]
}
