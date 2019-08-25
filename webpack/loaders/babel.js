const path = require('path');

module.exports = {
  include: [path.resolve(__dirname, 'src')],
  loader: 'babel-loader',

  options: {
    plugins: ['syntax-dynamic-import'],

    presets: [
      [
        'env',
        {
          modules: false
        }
      ]
    ]
  },

  test: /\.js$/
}