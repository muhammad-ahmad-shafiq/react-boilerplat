const path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // Load JS with Babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 4000,
    host: 'localhost',
    historyApiFallback: true,
    contentBase: './public',
  },
};
