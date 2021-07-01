const path = require('path');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
  mode: 'production',
  entry: {
    fv: './src/index.js',
    styles: './assets/scss/styles.scss',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.min.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'css/[name].min.css'
        },
        use: ['sass-loader'],
      },
    ],
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin({ extensions: ['scss'] }),
  ],
};
