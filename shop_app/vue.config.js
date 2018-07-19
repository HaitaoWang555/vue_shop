module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vue_shop/shop_app/dist/'
    : '/'
}