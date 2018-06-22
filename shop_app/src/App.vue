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
      this.transitionName = to.meta.index < from.meta.index ? 'page-right' : 'page-left'
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
