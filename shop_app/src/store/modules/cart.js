export default {
  state: {
    productNum: 0,
    productPrice: 0,
    serveChoose: false
  },
  getters: {
    getProductNum: state => {
      return state.productNum
    },
    getProductPrice: state => {
      return state.productPrice
    },
    getServeChoose: state => {
      return state.serveChoose
    }
  },
  mutations: {
    setProductNum(state, value) {
      state.productNum = value
    },
    setProductPrice(state, value) {
      state.productPrice = value
    },
    setServeChoose(state, value) {
      state.serveChoose = value
    },
  }
}