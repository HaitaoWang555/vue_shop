/* Area vue组件 */
<template>
  <div class="AreaSelect">
    <van-popup v-model="isAreaShow" position="bottom" >
      <van-area :area-list="areaList" columns-num="5" value="110101" @confirm="confirm($event)" @cancel="cancel"/>
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import { Area, Popup } from 'vant'
import { areaList } from '@/components/product/area.js'
import bus from '@/bus.js'
Vue.use(Popup)
Vue.use(Area)
export default {
  name: 'AreaSelect',
  data () {
    return {
      areaList,
      isAreaShow: false
    }
  },
  created () {
    bus.$on('isAreaShow', (val) => {
      this.isAreaShow = val
    })
  },
  methods: {
    confirm ($event) {
      bus.$emit('confirm', $event)
      this.isAreaShow = false
    },
    cancel () {
      this.isAreaShow = false
    }
  }
}
</script>

<style >
.van-picker__cancel, .van-picker__confirm {
  color: #ff6700;
}
</style>
