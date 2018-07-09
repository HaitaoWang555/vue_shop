<template>
  <div class="home">
    <!-- loading -->
    <Loading  v-if="loading" />
    <div class="homeContent" v-if="!loading">
      <!-- header -->
      <header>
        <div class="searchLogo"><img src="../assets/images/searchlogo.png"></div>
        <div class="search"><i class="iconfont icon-search"></i><span>搜索商品名称</span></div>
        <div class="login"><router-link to="/login"><i class="iconfont icon-people"></i></router-link></div>
      </header>
      <!-- nav -->
      <Tabs
        :active='active'
        :navList="navList"
        :onClick="onClick"
      />
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
  </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue'
import Loading from '@/components/Loading.vue'
import Recommend from '@/components/homeChildren/Recommend.vue'
import Active from '@/components/homeChildren/Active.vue'
import Intelligence from '@/components/homeChildren/Intelligence.vue'
import Tv from '@/components/homeChildren/Tv.vue'
import Computer from '@/components/homeChildren/Computer.vue'
import Mobile from '@/components/homeChildren/Mobile.vue'
import Around from '@/components/homeChildren/Around.vue'
import bus from '@/bus.js'

export default {
  name: 'home',
  components: {
    Loading,
    Tabs,
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
      loading: true,
      navList: null,
      active: 0,
      curIndex: 0,
      transitionName: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    next(bus.$emit('loading', false))
  },
  created () {
    this.$NProgress.start()
    this.getNavList()
  },
  destroyed () {
    this.$NProgress.remove()
  },
  methods: {
    getNavList () {
      this.$fetch('navList').then((res) => {
        this.navList = res.data.list
        this.moudle = res.data.list.templateName
        setTimeout(() => {
          this.loading = false
          this.$NProgress.done()
        }, 1000)
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
/* 覆盖tabbar vue组件 */
.home .van-tabbar-item__icon {
  height: 79px;
  margin-bottom: 0;
}
</style>
