const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'../','dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'../','src','index.html')
    }),
  ],
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.common.js"
    }
  }
}