/* AppHeader vue组件 */
<template>
  <div class="header layout">
    <div class="app-header-left" @click="goback">
        <van-icon name="arrow-left" />
    </div>
    <div class="app-header-middle">
      <div class="app-header-title">{{title}}</div>
    </div>
    <div class="app-header-right">
        <van-icon name="search" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: {
      default: ''
    }
  },
  components: {

  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.header {
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
  background: #f2f2f2;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
}
.app-header-middle {
  font-size: 16px;
  color: #666;
}
.app-header-left,
.app-header-right {
  width: 52px;
}
.header i {
  font-size: 20px;
  color: #666;
  vertical-align: middle;
}
</style>
