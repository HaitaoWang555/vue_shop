/* Product vue组件 */
<template>
  <div class="product">
    <ProductHeader />
    <Swiper :msg="swiperImages"/>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue'
import ProductHeader from '@/components/ProductHeader.vue'
export default {
  name: 'product',
  data () {
    return {
      swiperImages: null
    }
  },
  components: {
    Swiper,
    ProductHeader
  },
  created () {
    this.getProduct()
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
