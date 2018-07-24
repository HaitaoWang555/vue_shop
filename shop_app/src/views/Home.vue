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
      <transition-group class="shopList" tag="div" :name="transitionName">
        <!-- shoplistContent -->
        <div
          v-for="(nav,index) in navList"
          :key="nav.page_id"
          v-show="index == curIndex"
          class="shop"
          @touchstart="wrapScroll"
        >
        <keep-alive>
          <component
            v-bind:is="nav.templateName"
            v-if="componentsShow[index]"
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
import RecommendPage from '@/components/homeChildren/RecommendPage.vue'
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
    RecommendPage,
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
      transitionName: '',
      scrollTop: null,
      componentsShow: []
    }
  },
  beforeRouteEnter (to, from, next) {
    bus.$emit('loading', false)
    if (!from.name) { // 刷新和直接进入home 页
      next((vm) => {
        vm.$NProgress.start()
        vm.getNavList()
      })
    } else { // 路由 进入 home 页
      next((vm) => {
        if (!vm.navList) { // 没获取过首页数据
          vm.$NProgress.start()
          vm.getNavList()
        } else { // 获取过首页数据 跳转到之前位置
          vm.$nextTick(() => {
            document.querySelector('.shopList').scrollTop = vm.scrollTop[vm.curIndex].scrollTop
          })
        }
      })
    }
  },
  created () {
  },
  destroyed () {
    this.$NProgress.remove()
    document.querySelector('.shopList').removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    getNavList () {
      this.$fetch('navList').then((res) => {
        this.navList = res.data.list
        this.moudle = res.data.list.templateName
        let arr = []
        for (let i = 0; i < this.navList.length; i++) {
          arr.push({'scrollTop': 0})
          this.componentsShow.push(false)
        }
        this.componentsShow[this.active] = true
        this.scrollTop = JSON.parse(JSON.stringify(arr))
        setTimeout(() => {
          this.loading = false
          this.$NProgress.done()
        }, 1000)
      }).catch((err) => {
        console.error(err)
      })
    },
    onClick (index, title) {
      document.querySelector('.shopList').removeEventListener('scroll', this.scrollHandler)
      if (!this.componentsShow[index]) {
        this.$NProgress.start()
      }
      this.transitionName = index > this.curIndex ? 'page-left' : 'page-right'
      this.componentsShow[index] = true
      this.curIndex = index
      setTimeout(() => {
        document.querySelector('.shopList').scrollTop = this.scrollTop[index].scrollTop
        this.$NProgress.done()
      }, 100)
    },
    wrapScroll () {
      document.querySelector('.shopList').addEventListener('scroll', this.scrollHandler)
    },
    scrollHandler () {
      clearTimeout(this.scrollTimer)
      this.scrollTimer = setTimeout(() => {
        this.scrollTop[this.curIndex].scrollTop = document.querySelector('.shopList').scrollTop
      }, 100)
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
