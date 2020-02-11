module.exports = {
    mode: 'production',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      port: 5000,
      host: 'localhost',
      historyApiFallback: true,
      contentBase: './public',
    },
  };
