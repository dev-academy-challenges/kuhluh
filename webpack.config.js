const path = require('path')

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'server/static'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}
