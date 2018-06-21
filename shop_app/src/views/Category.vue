/* 分类 vue组件 */
<template>
  <div class="category">
    分类 vue组件
  </div>
</template>

<script>
export default {
  name: 'category',
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
  background-color:antiquewhite;
}
</style>
