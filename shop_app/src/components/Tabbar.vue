/*tabbar vue组件 */
<template>
  <div class="tabbar">
    <van-tabbar>
      <van-tabbar-item icon="shop"
        v-for="(tab,index) in msg"
        :key="index"
      >
        <template slot="icon" slot-scope="props">
          <img :src="tab.imgUrl" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  props: {
    msg: {
      tabList: null
    }
  }
}
</script>

<style scoped>
.van-tabbar--fixed {
  position: relative;
}
.van-tabbar,
.van-tabbar-item,
.van-tabbar-item__icon,
.van-tabbar-item__icon img {
  height: 79px;
}
</style>
