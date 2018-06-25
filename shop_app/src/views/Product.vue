/* Product vue组件 */
<template>
  <div class="product">
    <ProductHeader />
    <Swiper :msg="swiperImages"/>
    <GoodsAction />
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue'
import ProductHeader from '@/components/ProductHeader.vue'
import GoodsAction from '@/components/GoodsAction.vue'
import bus from '@/bus.js'
export default {
  name: 'product',
  data () {
    return {
      swiperImages: null
    }
  },
  components: {
    Swiper,
    ProductHeader,
    GoodsAction
  },
  created () {
    this.getProduct()
    bus.$emit('loading', true)
  },
  methods: {
    getProduct () {
      this.$fetch('product').then((res) => {
        this.swiperImages = res.data.swiperImages
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
/* Product 组件下轮播样式 */
.product .van-swipe img{
  width: 375px;
  height: 412.5px;
}
</style>
