const host = 'http://pbdg9iawq.bkt.clouddn.com'

const url = {
  navList: '/json/navLists',
  recommend: '/json/recommend',
  active: '/json/active',
  mobile: '/json/mobile',
  intelligence: '/json/intelligence',
  computer: '/json/computer',
  around: '/json/around',
  tv: '/json/tv',
  category: '/json/category',
  product: '/json/product',
  sku: '/json/sku',
  area: '/json/area',
  cart: '/json/cart',
  recommendList: '/json/recommendList'
}

Object.keys(url).forEach(key => {
  url[key] = host + url[key] + '.json'
})

export default url
