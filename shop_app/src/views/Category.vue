/* 分类 vue组件 */
<template>
  <div class="category">
    <!-- loading -->
    <Loading class="isFooter" v-if="loading" />
    <div class="categoryContent" v-if="!loading">
      categoryContent
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import bus from '@/bus.js'
export default {
  name: 'category',
  components: {
    Loading,
    bus
  },
  data () {
    return {
      loading: true
    }
  },
  created () {
    this.$NProgress.start()
    this.over()
  },
  destroyed () {
    this.$NProgress.remove()
  },
  methods: {
    over () {
      setTimeout(() => {
        this.$NProgress.done()
        this.loading = false
        bus.$emit('loading', false)
      }, 1000)
    }
  }
}
</script>

<style scoped>
.category {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 800px;
  background-color:#f2f2f2;
}
.isFooter {
  margin-top: 50px;
}
</style>
