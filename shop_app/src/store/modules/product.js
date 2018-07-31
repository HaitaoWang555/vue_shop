export default {
  state: {
    isPopupShow: false,
    isSkuShow: false,
    isAreaShow: false,
    changeProduct: null,
    changeGoodsView: null,
    confirm: null
  },
  getters: {
    isPopupShow: state => {
      return state.isPopupShow
    },
    isSkuShow: state => {
      return state.isSkuShow
    },
    isAreaShow: state => {
      return state.isAreaShow
    },
    changeProduct: state => {
      return state.changeProduct
    },
    changeGoodsView: state => {
      return state.changeGoodsView
    },
    confirm: state => {
      return state.confirm
    }
  },
  mutations: {
    isPopupShow(state, value) {
      state.isPopupShow = value
    },
    isSkuShow(state, value) {
      state.isSkuShow = value
    },
    isAreaShow(state, value) {
      state.isAreaShow = value
    },
    changeProduct(state, value) {
      state.changeProduct = value
    },
    changeGoodsView(state, value) {
      state.changeGoodsView = value
    },
    confirm(state, value) {
      state.confirm = value
    }
  }
}