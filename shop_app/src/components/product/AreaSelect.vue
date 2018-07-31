/* Area vue组件 */
<template>
  <div class="AreaSelect">
    <van-popup v-model="isAreaShow" position="bottom" v-if="areaList">
      <van-area :area-list="areaList" columns-num="5" value="110101" @confirm="confirm($event)" @cancel="cancel"/>
    </van-popup>
  </div>
</template>

<script>
import { Area, Popup } from 'vant'
export default {
  name: 'AreaSelect',
  components: {
    [Popup.name]: Popup,
    [Area.name]: Area
  },
  data () {
    return {
      areaList: null,
      isAreaShow: false
    }
  },
  created () {
    this.initData()
  },
  computed: {
    show () {
      return this.$store.getters.isAreaShow
    }
  },
  watch: {
    show: {
      deep: true,
      handler (val) {
        this.isAreaShow = val
      }
    }
  },
  methods: {
    initData () {
      this.$fetch('area').then((res) => {
        this.areaList = res.data.areaList
      })
    },
    confirm ($event) {
      this.$store.commit('confirm', $event)
      this.$store.commit('isAreaShow', false)
    },
    cancel () {
      this.$store.commit('isAreaShow', false)
    }
  }
}
</script>

<style >
.van-picker__cancel, .van-picker__confirm {
  color: #ff6700;
}
</style>
