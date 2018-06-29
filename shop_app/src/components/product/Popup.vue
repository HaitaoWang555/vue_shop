/* Popup 弹出框 vue组件 */
<template>
  <div class="Popup" v-if="isGiftShow">
    <van-popup v-model="show" position="bottom" >
      <h2>{{title}}</h2>
      <div class="value"><div class="tag">{{tag}}</div><div class="content">{{content}}</div></div>
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import { Popup } from 'vant'
Vue.use(Popup)
export default {
  name: 'Popup',
  props: {

  },
  data () {
    return {
      isGiftShow: false
    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<style scoped>
.value {
  position: relative;
  display: flex;
  justify-content: flex-start;
  color: rgba(0,0,0,.87);
  height: 20px;
  line-height: 20px;
}
.value .tag {
  color: #f56600;
  border-radius: 1px;
  font-size: 12px;
  border-color: #f56600;
  border: 1px solid;
  transform: scale(.8)
}
</style>
