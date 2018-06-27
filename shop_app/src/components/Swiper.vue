/* swiper vue组件 */
<template>
  <div class="swipWrap">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(images, index) in msg" :key="index">
          <img v-lazy="images.image" :key="images.image"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)
export default {
  name: 'swiper',
  props: {
    msg: {
      swiperImages: null
    }
  }
}
</script>

<style scoped>
.van-swipe img{
  width: 375px;
  height: 187.5px;
}
</style>
