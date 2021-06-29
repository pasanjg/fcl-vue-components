const path = require('path');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const WebpackObfuscator = require('webpack-obfuscator');

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
      {
        test: /\.js$/,
        enforce: 'post',
        use: {
          loader: WebpackObfuscator.loader,
          options: {
            rotateStringArray: true
          }
        }
      }
    ],
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin({ extensions: ['scss'] }),
  ],
};
