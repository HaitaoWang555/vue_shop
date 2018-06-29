/* goodsDescription vue组件 */
<template>
  <div class="description">
      <van-tabs>
        <van-tab
        v-for="(des, index) in data"
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
    <div class="seeAll" v-if="isAllShow" @click="changeShow">查看全部图文详情 ></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
Vue.use(Tab).use(Tabs)
export default {
  name: 'description',
  props: {
    allDec: {
      default: null
    },
    partDec: {
      default: null
    }
  },
  data () {
    return {
      isAllShow: true,
      data: null
    }
  },
  created () {
    this.data = this.partDec
  },
  methods: {
    changeShow () {
      this.data = this.allDec
      this.isAllShow = false
    }
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
