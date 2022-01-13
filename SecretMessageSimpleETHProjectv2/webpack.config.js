const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'web3.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};