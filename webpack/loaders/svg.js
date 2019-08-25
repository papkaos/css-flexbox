const path = require('path');

module.exports = {
  test: /src\/icons\/.*\.svg$/,
  use: [
    {
      loader: 'svg-sprite-loader',
    },
    'svgo-loader'
  ]
};