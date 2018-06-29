/* GoodsAction vue组件 */
<template>
  <van-goods-action>
    <van-goods-action-mini-btn icon="wap-home" text="首页" @click="onClickMiniBtn" />
    <van-goods-action-mini-btn icon="cart" text="购物车" @click="onClickMiniBtn" />
    <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
  </van-goods-action>
</template>

<script>
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant'
import Vue from 'vue'
import bus from '@/bus.js'
Vue.use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn)
export default {
  name: 'GoodsAction',
  props: {

  },
  created () {

  },
  components: {

  },
  methods: {
    onClickMiniBtn () {
      console.log('点击图标')
    },
    onClickBigBtn () {
      bus.$emit('isSkuShow', true)
    }
  }
}
</script>

<style scoped>
.van-goods-action {
  justify-content: space-between;
  background: white;
  z-index: 999;
}
.van-goods-action-big-btn {
  max-width: 224px;
  background-color: #ff6700;
}
.van-goods-action-mini-btn {
  min-width: 20%;
}
</style>
