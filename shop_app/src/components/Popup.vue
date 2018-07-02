/* Popup 弹出框 vue组件 */
<template>
  <van-popup v-model="isPopupShow" position="bottom" >
    <div class="popup">
      <van-icon name="close" @click="close"/>
      <h2>{{title}}</h2>
      <div class="value"><div class="tag">{{tag}}</div><div class="content">{{content}}</div></div>
    </div>
  </van-popup>
</template>

<script>
import Vue from 'vue'
import { Popup } from 'vant'
import bus from '@/bus.js'
Vue.use(Popup)
export default {
  name: 'Popup',
  props: {
    title: {
      default: null
    },
    tag: {
      default: null
    },
    content: {
      default: null
    }
  },
  data () {
    return {
      isPopupShow: false
    }
  },
  created () {
    bus.$on('isPopupShow', (val) => {
      this.isPopupShow = val
    })
  },
  components: {

  },
  methods: {
    close () {
      this.isPopupShow = false
    }
  }
}
</script>

<style scoped>
.popup {
  min-height: 260px;
  padding: 16px;
  color: black;
  position: relative;
}
.popup i {
  position: absolute;
  right: 16px;
}
h2 {
  font-weight: normal;
  font-size: 18px;
  padding: 12.5px 0;
}
.value {
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: 20px;
  line-height: 20px;
}
.value .tag {
  margin-right: 5px;
  color: #f56600;
  border-radius: 1px;
  font-size: 12px;
  border-color: #f56600;
  border: 1px solid;
  transform: scale(.8)
}
</style>
