/* 活动页vue组件 */
<template>
  <div class="active">
    <header>
      <img v-lazy="img"/>
    </header>
    <Tabbar :msg="tabList"/>
    <DividerLine bgColor="rgb(180, 53, 48)" />
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
import DividerLine from '@/components/DividerLine.vue'
export default {
  name: 'active',
  components: {
    Tabbar,
    DividerLine
  },
  data () {
    return {
      img: '',
      tabList: null
    }
  },
  created () {
    this.activeActive()
  },
  methods: {
    activeActive () {
      this.getActive()
      this.$nextTick(() => {
        console.log('created')
        setTimeout(document.querySelector('html').scrollTo(0, 0), 10)
      })
    },
    getActive () {
      this.$fetch('active').then((res) => {
        this.img = res.data.img
        this.tabList = res.data.tabList
      }).catch((err) => {
        console.log(err)
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
