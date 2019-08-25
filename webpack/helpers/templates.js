const HTMLWebpackPlugin = require("html-webpack-plugin");
const fs = require('fs');
const path = require('path');

module.exports.generateHtmlPlugins = (templateDir) => {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    // Split names and extension
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HTMLWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
    })
  })
};