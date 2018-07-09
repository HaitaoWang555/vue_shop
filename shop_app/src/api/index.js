const host = 'http://pbdg9iawq.bkt.clouddn.com'

const url = {
  navList: '/json/navList',
  recommend: '/json/recommend',
  active: '/json/active',
  mobile: '/json/mobile',
  intelligence: '/json/intelligence',
  computer: '/json/computer',
  around: '/json/around',
  tv: '/json/tv',
  category: '/json/category',
  product: '/json/product',
  recommendList: '/json/recommendList'
}

Object.keys(url).forEach(key => {
  url[key] = host + url[key] + '.json'
})

export default url
