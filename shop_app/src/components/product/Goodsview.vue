/* Goodsview vue组件 */
<template>
  <div class="goodsView" v-if="goodsview">
    <div class="goodsName">{{goodsview.goodsName}}</div>
    <div class="goodsBrief" v-html="goodsview.goodsBrief"></div>
    <div class="goodsPrice">
      <van-icon name="balance-pay" color="#ff6700"/>
      <div class="curPrice">{{goodsview.goodsPrice}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsview',
  props: {
    goodsview: {
      default: null
    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<style scoped>
.goodsView {
  background: #fff;
  text-align: left;
  padding: 10px 16px 0;
}
.goodsName {
  font-size: 20px;
  line-height: 28px;
}
.goodsBrief {
  font-size: 14px;
  line-height: 18px;
  color: rgba(0,0,0,.54);
}
.goodsPrice {
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 24px;
}
.goodsPrice .curPrice {
  color: #ff6700;
  font-weight: 700;
}
</style>
