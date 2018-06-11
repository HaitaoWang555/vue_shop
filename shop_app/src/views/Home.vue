<template>
  <div class="home">
    <!-- header -->
    <header>
      <div class="searchLogo"><img src="../assets/images/searchlogo.png"></div>
      <div class="search"><i class="iconfont icon-search"></i><span>搜索商品名称</span></div>
      <div class="login"><i class="iconfont icon-people"></i></div>
    </header>
    <!-- nav -->
    <nav>
      <div v-for="(nav, index) in navList" :key="nav.page_id" class="nav_item" :class="curIndex === index ? 'active' : ''" @click="navChange(index)">
        <span>{{nav.name}}</span>
      </div>
    </nav>
    <!-- header -->
    <!-- shoplist -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      navList: null,
      curIndex: 0
    }
  },
  created () {
    this.getNavList()
  },
  methods: {
    getNavList () {
      axios.get('http://rap2api.taobao.org/app/mock/16411/navList').then((res) => {
        this.navList = res.data.list
        console.log(this.navList)
      }).catch((err) => {
        console.log(err)
      })
    },
    navChange (index) {
      this.curIndex = index
    }
  }
}
</script>

<style scoped>
@import "./css/home.css";
</style>
