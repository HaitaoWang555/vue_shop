/* vue组件 */
<template>
  <div class="tv">
    <header>
      <img v-lazy="img"/>
    </header>
    <Tabbar :msg="tabList"/>
    <DividerLine bgColor="rgb(180, 53, 48)" />
    <Recommend
      v-if="recommend"
      :title="recommend.title"
      :recommendList="recommend.recommend_list"
    />
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
import DividerLine from '@/components/DividerLine.vue'
import Recommend from '@/components/product/Recommend.vue'
export default {
  name: 'tv',
  components: {
    Tabbar,
    DividerLine,
    Recommend
  },
  data () {
    return {
      img: '',
      tabList: null,
      recommend: null
    }
  },
  created () {
    this.tvActive()
  },
  methods: {
    tvActive () {
      this.getTv()
    },
    getTv () {
      this.$fetch('tv').then((res) => {
        this.img = res.data.img
        this.tabList = res.data.tabList
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
.tv {
  background-color: rgb(180, 53, 48);
}
header {
  height: 187.5px;
}
header img{
  width: 100%;
}
</style>
