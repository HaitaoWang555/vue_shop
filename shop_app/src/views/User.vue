/* User vue组件 */
<template>
  <div class="user">
    User vue组件
  </div>
</template>

<script>
export default {
  name: 'user',
  created () {
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
.user {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 800px;
  background-color:aliceblue;
}
</style>
