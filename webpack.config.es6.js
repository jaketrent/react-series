import HtmlWebpackPlugin from 'html-webpack-plugin'

import postCssAutoprefixer from 'autoprefixer'
import postCssNested from 'postcss-nested'

export default {
  entry: [ 'babel/polyfill', './index' ],
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader?stage=0' },
      { test: /\.css$/, loader: 'style!css?module!postcss!cssnext' }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  postcss: [ postCssAutoprefixer, postCssNested ],
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.html',
      title: 'React Series',
      devServer: 'http://localhost:3000',
      appMountId: 'app',
      mobile: true
    })
  ]
}
