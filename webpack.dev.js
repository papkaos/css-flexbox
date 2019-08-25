const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { generateHtmlPlugins } = require('./webpack/helpers/templates');
const htmlPlugins = generateHtmlPlugins('../../src/templates/modules');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// loaders
const babelLoader  = require('./webpack/loaders/babel');
const pugLoader  = require('./webpack/loaders/pug');
const cssLoader  = require('./webpack/loaders/css');
const svgLoader  = require('./webpack/loaders/svg');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].[hash].css"
    }),
    new HTMLWebpackPlugin({
      filename: `index.html`,
      template: path.resolve(__dirname, `./src/index/index.pug`)
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/images/*.png',
        to: '',
        transformPath (targetPath, absolutePath) {
        	const updateTargetPath = targetPath.split('src/');
          return updateTargetPath[1];
        }
      }
    ])
  ]
	.concat(htmlPlugins),
  module: {
		rules: [
      babelLoader,
      pugLoader,
      cssLoader,
      svgLoader
		]
	},

	entry: {
		app: './src/scripts/app.js',
		icons: './src/icons/icons.js',
    vendor: './src/scripts/vendor.js'
	},

	output: {
		filename: 'js/[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	mode: 'development',

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};
