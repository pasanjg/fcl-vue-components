const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    fv: `./src/index.js`,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  }
};
