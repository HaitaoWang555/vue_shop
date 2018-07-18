/* 活动页vue组件 */
<template>
  <div class="active">
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
  name: 'active',
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
    this.activeActive()
  },
  methods: {
    activeActive () {
      this.getActive()
    },
    getActive () {
      this.$fetch('active').then((res) => {
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
.active {
  background-color: rgb(180, 53, 48);
}
header {
  height: 187.5px;
}
header img{
  width: 100%;
}
</style>
