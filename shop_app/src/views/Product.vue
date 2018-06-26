/* Product vue组件 */
<template>
  <div class="product">
    <Loading class="isFooter" v-if="loading" />
    <template  v-if="!loading">
      <ProductHeader />
      <Swiper :msg="swiperImages"/>
      <Goodsview :goodsview="goodsview"/>
      <GoodsAction />
    </template>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import Swiper from '@/components/Swiper.vue'
import ProductHeader from '@/components/product/ProductHeader.vue'
import Goodsview from '@/components/product/Goodsview.vue'
import GoodsAction from '@/components/product/GoodsAction.vue'
import bus from '@/bus.js'
export default {
  name: 'product',
  data () {
    return {
      loading: true,
      swiperImages: null,
      goodsview: null
    }
  },
  components: {
    Loading,
    Swiper,
    ProductHeader,
    Goodsview,
    GoodsAction
  },
  beforeRouteEnter (to, from, next) {
    next(bus.$emit('loading', true))
  },
  created () {
    this.$NProgress.start()
    this.getProduct()
  },
  destroyed () {
    this.$NProgress.remove()
  },
  methods: {
    getProduct () {
      this.$fetch('product').then((res) => {
        this.swiperImages = res.data.swiperImages
        this.goodsview = res.data.overview
        this.loading = false
        this.$NProgress.done()
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.product .isFooter {
  margin-top: 50px!important;
}
</style>
<style>
/* Product 组件下轮播样式 */
.product .van-swipe img{
  width: 375px;
  height: 412.5px;
}
</style>
