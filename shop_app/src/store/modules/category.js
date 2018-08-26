export default {
  state: {
    curIndex: 0,
    scrollTop: 0,
    offsetTop: null,
    scrollHandler: null
  },
  getters: {
    getCurIndex: state => {
      return state.curIndex
    },
    getScrollTop: state => {
      return state.scrollTop
    },
    getOffsetTop: state => {
      return state.offsetTop
    },
    getScrollHandler: state => {
      return state.scrollHandler
    }
  },
  mutations: {
    setCurIndex (state, value) {
      state.curIndex = value
    },
    setScrollTop (state, value) {
      state.scrollTop = value
    },
    setOffsetTop (state, value) {
      state.offsetTop = value
    },
    setScrollHandler (state, value) {
      state.scrollHandler = value
    }
  }
}
