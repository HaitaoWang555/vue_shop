/* vue组件 */
<template>
  <div class="mobile">
    <Swiper :msg="swiperImages"/>
    <DividerLine bgColor="rgb(245, 245, 245)" />
    <Recommend
      v-if="recommend"
      :title="recommend.title"
      :recommendList="recommend.recommend_list"
    />
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue'
import DividerLine from '@/components/DividerLine.vue'
import Recommend from '@/components/product/Recommend.vue'
export default {
  name: 'mobile',
  components: {
    Swiper,
    DividerLine,
    Recommend
  },
  data () {
    return {
      swiperImages: null,
      recommend: null
    }
  },
  created () {
    this.recommendMobile()
  },
  methods: {
    recommendMobile () {
      this.getMobile()
    },
    getMobile () {
      this.$fetch('mobile').then((res) => {
        this.swiperImages = res.data.swiperImages
      }).catch((err) => {
        console.error(err)
      })
      this.$fetch('recommendList').then((res) => {
        this.recommend = res.data.recommend
      }).catch((err) => {
        console.error(err)
      })
    }
  }
}
</script>

<style scoped>
</style>
