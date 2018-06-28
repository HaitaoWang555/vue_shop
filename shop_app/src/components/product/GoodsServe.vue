/* GoodsServe vue组件 */
<template>
  <p class="goodsServe">
    <van-icon name="passed" color="#fcad7d" />
    <span>{{centent}}</span>
  </p>
</template>

<script>
export default {
  name: 'goodsServe',
  props: {
    centent: {
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
.goodsServe {
  padding: 4px 0 0 16px;
  font-size: 12px;
  color: rgba(0,0,0,.54);
}
.goodsServe span {
  font-size: 14px;
  margin-left: 4px;
}
</style>
