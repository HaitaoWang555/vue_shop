/* 推荐页vue组件 */
<template>
  <div class="recommend">
    <div class="swipWrap">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(images, index) in swiperImages" :key="index">
            <img v-lazy="images.image" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'recommend',
  data () {
    return {
      swiperImages: null
    }
  },
  created () {
    this.getSwipe()
  },
  methods: {
    getSwipe () {
      axios.get('https://www.easy-mock.com/mock/5b28c7283f9f7c0b22426d96/vue_shop/recommend').then((res) => {
        this.swiperImages = res.data.swiperImages
      }).catch((err) => {
        console.log(err)
      })
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
