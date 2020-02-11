module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 4000,
    host: 'localhost',
    historyApiFallback: true,
    contentBase: './public',
  },
};
