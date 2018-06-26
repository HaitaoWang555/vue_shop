/* 购物车 vue组件 */
<template>
  <div class="cart">
    购物车 vue组件
  </div>
</template>

<script>
export default {
  name: 'cart',
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
.cart {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 800px;
  background-color:beige;
}
</style>
