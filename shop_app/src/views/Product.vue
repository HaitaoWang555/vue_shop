/* Product vue组件 */
<template>
  <div class="product">
    <Loading class="isFooter" v-if="loading" />
    <template  v-if="!loading">
      <ProductHeader />
      <Swiper :msg="pruductData.swiperImages"/>
      <Goodsview :goodsview="pruductData.goodsview"/>
      <div class="goodsCellWrap">
        <GoodsCell
        v-for="(goodsCell, index) in pruductData.goodsCell"
        :key="index"
        :goodsCell="goodsCell"
        />
      </div>
      <div class="goodsServeWrap">
        <GoodsServe
          v-for="(goodsServe, index) in pruductData.goodsServe"
          :key="index"
          :goodsServe="goodsServe"
        />
      </div>
      <GoodsAction />
    </template>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import Swiper from '@/components/Swiper.vue'
import ProductHeader from '@/components/product/ProductHeader.vue'
import Goodsview from '@/components/product/Goodsview.vue'
import GoodsCell from '@/components/product/GoodsCell.vue'
import GoodsServe from '@/components/product/GoodsServe.vue'
import GoodsAction from '@/components/product/GoodsAction.vue'
import bus from '@/bus.js'
export default {
  name: 'product',
  data () {
    return {
      loading: true,
      pruductData: null
    }
  },
  components: {
    Loading,
    Swiper,
    ProductHeader,
    Goodsview,
    GoodsCell,
    GoodsServe,
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
        this.pruductData = res.data
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
.product {
  margin-bottom: 50px;
  background-color: #efefef;
}
.product .goodsCell:first-child {
  margin-bottom: 4px;
}
.product .goodsServeWrap {
  display: flex;
  justify-content: flex-start;
  padding: 10px 0;
  background-color: white;
}
</style>
<style>
/* Product 组件下轮播样式 */
.product .van-swipe img{
  width: 375px;
  height: 412.5px;
}
</style>
