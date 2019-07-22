const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './index.js',
   output: {
      path: path.join(__dirname, '/bundle'),//index_bundle.js created here
      filename: 'index_bundle.js'//name of the main file during producution
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
               presets: ['env', 'react'],
            }
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}