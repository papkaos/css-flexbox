const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../'
      }
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: true
      }
    },
    {
      loader: 'postcss-loader',

      options: {
        plugins: [
          require('postcss-import'),
          require('postcss-nested'),
          require('postcss-preset-env'),
        ]
      }
    }
  ]
}