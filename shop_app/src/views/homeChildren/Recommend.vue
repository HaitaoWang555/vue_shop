/* 推荐页vue组件 */
<template>
  <div class="recommend">
    <div class="swipWrap">
      <van-swipe :autoplay="3000" touchable>
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
      swiperImages: null,
      moudle: ''
    }
  },
  created () {
    this.getSwipe()
  },
  methods: {
    getSwipe () {
      axios.get('http://rap2api.taobao.org/app/mock/16411/recommend').then((res) => {
        this.swiperImages = res.data.swiperImages
        this.moudle = res.data.swiperImages
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
