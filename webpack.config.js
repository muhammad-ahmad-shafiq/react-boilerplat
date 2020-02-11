const path = require('path');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const common = {
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
}

module.exports = (_env, options) => {
  const envConfig = options.mode === 'production' ? prodConfig : devConfig;

  return merge(common, envConfig);
}
