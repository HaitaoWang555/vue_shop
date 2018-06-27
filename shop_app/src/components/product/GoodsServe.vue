/* GoodsServe vue组件 */
<template>
  <p class="goodsServe">
    <van-icon name="passed" color="#fcad7d" />
    <span>{{goodsServe.centent}}</span>
  </p>
</template>

<script>
export default {
  name: 'goodsServe',
  props: {
    goodsServe: {
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
  padding-left: 16px;
  font-size: 12px;
  color: rgba(0,0,0,.54);
}
</style>
