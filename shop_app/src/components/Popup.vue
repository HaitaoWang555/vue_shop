/* Popup 弹出框 vue组件 */
<template>
  <van-popup v-model="isPopupShow" position="bottom" :close-on-click-overlay="false">
    <div class="popup">
      <van-icon name="close" @click="close"/>
      <h2 v-if="title">{{title}}</h2>
      <div v-if="content" class="value"><div class="tag">{{tag}}</div><div class="content">{{content}}</div></div>
    </div>
  </van-popup>
</template>

<script>
import { Popup } from 'vant'
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
  computed: {
    show () {
      return this.$store.getters.isPopupShow
    }
  },
  watch: {
    show: {
      deep: true,
      handler (val) {
        this.isPopupShow = val
      }
    }
  },
  components: {
    [Popup.name]: Popup
  },
  methods: {
    close () {
      this.$store.commit('isPopupShow', false)
    }
  }
}
</script>

<style scoped>
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
