const { defineConfig } = require('@vue/cli-service')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const configureWebpack = process.env.NODE_ENV === 'production' ? {
  entry:'./src/components/vue-ueditor/index.js',
  output:{
    filename: 'vue-ueditor.min.js',
    library: 'VueUeditor',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      parallel: true
    })
  ]
}:{}
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'lib',
  configureWebpack
})
