const path = require('path');

module.exports = {
  entry: './src/pages/Index/html.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'public'),
  },
  module:{
      rules:[
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
      ]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
      contentBase: path.join(__dirname, 'public'),
  }
};