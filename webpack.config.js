const path = require('path');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

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
    plugins: [
      new FixStyleOnlyEntriesPlugin({ extensions: ['scss'] }),
    ],
  }
};
