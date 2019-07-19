const path = require('path');
const merge = require('webpack-merge');

module.exports = async ({ config, mode }) => merge(config, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          'sass-loader',
        ],
        include: path.resolve(__dirname, '../src/'),
      },
    ],
  },
});
