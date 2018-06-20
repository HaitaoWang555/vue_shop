/* 推荐页vue组件 */
<template>
  <div class="recommend">
    <Swiper :msg="swiperImages"/>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue'
import axios from 'axios'
export default {
  name: 'recommend',
  components: {
    Swiper
  },
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
</style>
