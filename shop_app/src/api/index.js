const host = 'https://www.easy-mock.com/mock/5b28c7283f9f7c0b22426d96'

const url = {
  navList: '/vue_shop/navList',
  recommend: '/vue_shop/recommend',
  active: '/vue_shop/active',
  mobile: '/vue_shop/mobile',
  intelligence: '/vue_shop/intelligence',
  computer: '/vue_shop/computer',
  around: '/vue_shop/around',
  tv: '/vue_shop/tv',
  category: '/vue_shop/category',
  product: '/vue_shop/product',
  recommendList: '/vue_shop/recommendList'
}

Object.keys(url).forEach(key => {
  url[key] = host + url[key]
})

export default url
