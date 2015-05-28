import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: [ 'babel/polyfill', './index' ],
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader?stage=0' },
      { test: /\.md$/, loader: "html!markdown" }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.html',
      title: 'Demo Self Registration',
      devServer: 'http://localhost:3000',
      appMountId: 'app'
    })
  ]
}
