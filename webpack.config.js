const path = require('path');
const webpack = require('webpack');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const packageJson = require('./package.json');

module.exports = (env) => {
  const mode = env && env.mode;
  const outputPath = mode === 'production' ?
    path.resolve(__dirname, 'dist')
    : path.resolve(__dirname, 'build');

  return {
    mode: mode || 'development',
    entry: {
      fv: './src/index.js',
      styles: './assets/scss/styles.scss',
    },
    output: {
      path: outputPath,
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
    optimization: {
      minimize: true,
      minimizer: [
        (compiler) => {
          const TerserPlugin = require('terser-webpack-plugin');
          new TerserPlugin({
            terserOptions: {
              compress: {},
              output: {
                // Preserve license comments.
                comments: /^!/
              },
            },
            extractComments: false,
          }).apply(compiler);
        },
      ],
    },
    plugins: [
      new FixStyleOnlyEntriesPlugin({ extensions: ['scss'] }),
      new webpack.BannerPlugin({
        banner: () => {
          const date = new Date();
          return (
            `FV Components v${packageJson.version}
             Copyright (c) ${date.getFullYear()} ${packageJson.author}
             License ${packageJson.license}`
          ).replace(/\ {2,}/g, '');
        },
        raw: false
      }),
    ],
  }
};
