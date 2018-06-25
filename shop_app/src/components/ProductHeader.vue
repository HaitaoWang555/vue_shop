/* vue组件 */
<template>
  <header class="layout">
    <div class="left" @click="goback">
      <van-icon name="arrow-left" />
    </div>
    <div class="share">
      <van-icon name="share" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'ProductHeader',
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
}
.layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 10px;
}
.left,
.share {
  width: 32px;
  height: 32px;
  background-color: rgba(0,0,0,.6);
  border-radius: 50%;
  line-height: 32px;
}
header i {
  font-size: 14px;
  font-weight: bolder;
  color:#ddd;
  vertical-align: middle;
}
</style>
