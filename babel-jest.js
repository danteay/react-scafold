/* eslint-disable no-undef */
module.exports = require('babel-jest').createTransformer({
  presets: [
    [
      require.resolve('babel-preset-env'),
      {
        targets: {
          node: '12',
        },
      },
    ],
  ],
});