/* vue组件 */
<template>
  <div class="computer">
    <Swiper :msg="swiperImages"/>
    <Tabbar :msg="tabList"/>
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
import Tabbar from '@/components/Tabbar.vue'
import DividerLine from '@/components/DividerLine.vue'
import Recommend from '@/components/product/Recommend.vue'
export default {
  name: 'computer',
  components: {
    Swiper,
    Tabbar,
    DividerLine,
    Recommend
  },
  data () {
    return {
      swiperImages: null,
      tabList: null,
      recommend: null
    }
  },
  created () {
    this.computerActive()
  },
  methods: {
    computerActive () {
      this.getComputer()
    },
    getComputer () {
      this.$fetch('computer').then((res) => {
        this.swiperImages = res.data.swiperImages
        this.tabList = res.data.tabList
      }).catch((err) => {
        console.log(err)
      })
      this.$fetch('recommendList').then((res) => {
        this.recommend = res.data.recommend
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
</style>
