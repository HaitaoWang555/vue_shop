<template>
  <div class="home">
    <!-- header -->
    <header>
      <div class="searchLogo"><img src="../assets/images/searchlogo.png"></div>
      <div class="search"><i class="iconfont icon-search"></i><span>搜索商品名称</span></div>
      <div class="login"><i class="iconfont icon-people"></i></div>
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
      <div
        v-for="(nav,index) in navList"
        :key="nav.page_id"
        v-show="index == curIndex"
        class="shop" >
        {{nav.name}}
      </div>
    </transition-group>
  </div>
</template>

<script>
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

export default {
  name: 'home',
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
  },
  destroyed () {
    NProgress.remove()
  },
  methods: {
    getNavList () {
      axios.get('http://rap2api.taobao.org/app/mock/16411/navList').then((res) => {
        this.navList = res.data.list
      }).catch((err) => {
        console.log(err)
      })
    },
    onClick (index, title) {
      NProgress.start()
      setTimeout(() => {
        this.transitionName = index > this.curIndex ? 'page-left' : 'page-right'
        this.curIndex = index
        this.$toast(title)
        NProgress.done()
      }, 1000)
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
</style>
