<template>
  <div class="home">
    <!-- header -->
    <header>
      <div class="searchLogo"><img src="../assets/images/searchlogo.png"></div>
      <div class="search"><i class="iconfont icon-search"></i><span>搜索商品名称</span></div>
      <div class="login"><router-link to="/login"><i class="iconfont icon-people"></i></router-link></div>
    </header>
    <!-- nav -->
    <van-tabs
    :active='active'
    @click="onClick"
    >
      <van-tab
        v-for="nav in navList"
        :title="nav.name"
        :key="nav.page_id"
      >
      </van-tab>
    </van-tabs>
    <!-- shoplist -->
    <transition-group class="shopList" tag="div" :name="transitionName" >
      <!-- shoplistContent -->
      <div
        v-for="(nav,index) in navList"
        :key="nav.page_id"
        v-show="index == curIndex"
        class="shop"
      >
      <keep-alive>
        <component
          v-bind:is="nav.templateName"
          v-if="index == curIndex"
        >
        </component>
        </keep-alive>
      </div>
    </transition-group>
  </div>
</template>

<script>
import Recommend from '@/views/homeChildren/Recommend.vue'
import Active from '@/views/homeChildren/Active.vue'
import Intelligence from '@/views/homeChildren/Intelligence.vue'
import Tv from '@/views/homeChildren/Tv.vue'
import Computer from '@/views/homeChildren/Computer.vue'
import Mobile from '@/views/homeChildren/Mobile.vue'
import Around from '@/views/homeChildren/Around.vue'

export default {
  name: 'home',
  components: {
    Recommend,
    Active,
    Intelligence,
    Tv,
    Computer,
    Mobile,
    Around
  },
  data () {
    return {
      navList: null,
      active: 0,
      curIndex: 0,
      transitionName: ''
    }
  },
  created () {
    this.getNavList()
    this.$NProgress.start()
  },
  destroyed () {
    this.$NProgress.remove()
  },
  methods: {
    getNavList () {
      this.$fetch('navList').then((res) => {
        this.navList = res.data.list
        this.moudle = res.data.list.templateName
        this.$NProgress.done()
      }).catch((err) => {
        console.log(err)
      })
    },
    onClick (index, title) {
      this.$NProgress.start()
      this.transitionName = index > this.curIndex ? 'page-left' : 'page-right'
      setTimeout(() => {
        this.curIndex = index
        this.$NProgress.done()
      }, 300)
    }
  }
}
</script>

<style scoped>
@import "./css/home.css";
</style>
<style>
/* 覆盖导航默认样式 */
.home .van-tabs {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 100;
}
.home .van-tabs__wrap {
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
}
.home .van-hairline--top-bottom:after {
  border-top: none;
}
.home .van-tab {
  background-color: #f2f2f2;
}
/* 覆盖默认进度条样式 */
#nprogress .bar {
  background-color: rgba(237, 91, 0, 0.5);
}
#nprogress .peg {
  box-shadow: 0 0 10px rgba(237, 91, 0, 0.5), 0 0 5px rgba(237, 91, 0, 0.5);
}
/* 覆盖tabbar vue组件 */
.home .van-tabbar-item__icon {
  height: 79px;
  margin-bottom: 0;
}
</style>
