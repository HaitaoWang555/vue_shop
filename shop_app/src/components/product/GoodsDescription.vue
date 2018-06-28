/* goodsDescription vue组件 */
<template>
  <div class="description">
    <van-tabs>
      <van-tab
      v-for="(des, index) in goodsDescription"
      :key="index"
      :title="des.name"
      >
        <img
          v-for="(data, index) in des.tabContent"
          :key="index"
          v-lazy="data.plainView.img"
        >
      </van-tab>
    </van-tabs>
    <div class="seeAll">查看全部图文详情 ></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
Vue.use(Tab).use(Tabs)
export default {
  name: 'description',
  props: {
    goodsDescription: {
      default: null
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  components: {

  },
  methods: {
  }
}
</script>

<style scoped>
.description {
  margin-top: 8.5px;
}
.description img{
  width: 100%;
}
.seeAll {
  background: #fff;
  font-size: 14px;
  color: #ff6700;
  padding: 15px 0;
}
</style>
