const path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
