const path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 4000,
    host: 'localhost',
    historyApiFallback: true,
    contentBase: './public',
  },
};
