/* GoodsAction vue组件 */
<template>
  <van-goods-action>
    <van-goods-action-mini-btn to="/home" icon="wap-home" text="首页" @click="onClickMiniBtn" />
    <van-goods-action-mini-btn to="/cart" icon="cart" text="购物车" @click="onClickMiniBtn" />
    <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
  </van-goods-action>
</template>

<script>
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant'
export default {
  name: 'GoodsAction',
  props: {

  },
  created () {

  },
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },
  methods: {
    onClickMiniBtn () {
    },
    onClickBigBtn () {
      this.$store.commit('isSkuShow', true)
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
