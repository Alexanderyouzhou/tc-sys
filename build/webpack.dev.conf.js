'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWpConf = require('./webpack.base.conf.js')
const path = require('path')
const config = require('./config.js')

module.exports = env => {
  return merge(baseWpConf, {
    devtool:'inline-source-map',
    devServer:{
      contentBase:path.resolve(__dirname,'../','dist')
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'LANG': JSON.stringify(env.lang),
        'NODE_ENV': JSON.stringify(env.NODE_ENV),
        'HOST_DOMAIN': JSON.stringify(config.domain)
      })
    ]
  })
}