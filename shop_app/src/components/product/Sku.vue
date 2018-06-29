/* Sku vue组件 */
<template>
  <van-popup v-model="show" position="bottom" >
    <div class="sku">
      <h2>sdfsadfsadf</h2>
    </div>
  </van-popup>
</template>

<script>
import Vue from 'vue'
import { Popup, Stepper } from 'vant'
import bus from '@/bus.js'
Vue.use(Popup).use(Stepper)
export default {
  name: 'sku',
  props: {

  },
  data () {
    return {
      show: false
    }
  },
  created () {
    bus.$on('isSkuShow', (val) => {
      this.show = val
    })
  },
  components: {

  },
  methods: {

  }
}
</script>

<style scoped>
.sku {
  min-height: 260px;
}
</style>
