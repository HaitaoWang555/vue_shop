const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vue_shop/shop_app/dist/'
    : '/',
    configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        chunksSortMode: 'manual'
      })
    ]
  }
}