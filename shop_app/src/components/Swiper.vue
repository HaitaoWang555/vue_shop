/* swiper vue组件 */
<template>
  <div class="swipWrap">
    <van-swipe>
      <van-swipe-item v-for="(images, index) in msg" :key="index">
          <img v-lazy="images.image" :key="images.image"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
export default {
  name: 'swiper',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
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
