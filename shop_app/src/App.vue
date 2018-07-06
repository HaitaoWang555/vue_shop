<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer
  },
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    '$route' (to, from) {
      if (!from.name) {
        this.transitionName = ''
        return
      }
      this.transitionName = to.meta.index < from.meta.index ? 'page-right' : 'page-left'
    }
  }

}
</script>

<style>
#app {
  font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  overflow-y: auto;
  min-height: 100vh;
  position: relative;
}
/* <transition> 切换效果 */
.page-left-enter-active, .page-left-leave-active {
  transition: all .5s ease;
}
.page-left-enter {
  transform: translateX(100%);
}
.page-left-enter-to {
  transform: translateX(0);
}
.page-left-leave {
  transform: translateX(0);
}
.page-left-leave-to {
  transform: translateX(-100%);
}
.page-right-enter-active, .page-right-leave-active {
  transition: all .5s ease;
}
.page-right-enter {
  transform: translateX(-100%);
}
.page-right-enter-to {
  transform: translateX(0);
}
.page-right-leave {
  transform: translateX(0);
}
.page-right-leave-to {
  transform: translateX(100%);
}
/* 覆盖默认进度条样式 */
#nprogress .bar {
  background-color: rgba(237, 91, 0, 0.5)!important;
}
#nprogress .peg {
  box-shadow: 0 0 10px rgba(237, 91, 0, 0.5), 0 0 5px rgba(237, 91, 0, 0.5)!important;
}
/* popup */
.popup {
  min-height: 260px;
  padding: 16px;
  color: black;
  position: relative;
}
.popup > i {
  position: absolute;
  right: 16px;
}
.popup h2 {
  font-weight: normal;
  font-size: 18px;
  padding: 12.5px 0;
}
</style>
