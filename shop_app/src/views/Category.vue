/* 分类 vue组件 */
<template>
  <div class="category">
    <!-- loading -->
    <Loading class="isFooter" v-if="loading" />
    <div class="categoryContent" v-if="!loading">
      <AppHeader title="分类" />
      <ListNavbar :categoryList="categoryList" :curIndex="curIndex"/>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import AppHeader from '@/components/AppHeader.vue'
import ListNavbar from '@/components/ListNavbar.vue'
import bus from '@/bus.js'
export default {
  name: 'category',
  components: {
    Loading,
    AppHeader,
    ListNavbar
  },
  data () {
    return {
      loading: true,
      categoryList: null,
      curIndex: 0
    }
  },
  created () {
    this.$NProgress.start()
    this.over()
    this.getCategory()
  },
  destroyed () {
    this.$NProgress.remove()
  },
  methods: {
    over () {
      setTimeout(() => {
        this.$NProgress.done()
        this.loading = false
        bus.$emit('loading', false)
      }, 1000)
    },
    getCategory () {
      this.$fetch('category').then((res) => {
        this.categoryList = res.data.lists
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.category {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 800px;
  background-color:#f2f2f2;
}
.isFooter {
  margin-top: 50px;
}
</style>
