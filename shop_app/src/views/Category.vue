/* 分类 vue组件 */
<template>
  <div class="category">
    <!-- loading -->
    <Loading class="isFooter" v-if="loading" />
    <template  v-if="!loading">
      <AppHeader title="分类" />
      <ListNavbar :categoryList="categoryList" />
      <ListWrap :categoryList="categoryList"/>
    </template>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import AppHeader from '@/components/AppHeader.vue'
import ListNavbar from '@/components/category/ListNavbar.vue'
import ListWrap from '@/components/category/ListWrap.vue'
export default {
  name: 'category',
  components: {
    Loading,
    AppHeader,
    ListNavbar,
    ListWrap
  },
  data () {
    return {
      loading: true,
      categoryList: []
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.loading) {
        vm.getCategory()
      }
    })
  },
  created () {
    this.$NProgress.start()
  },
  destroyed () {
    this.$NProgress.remove()
  },
  methods: {
    over () {
      setTimeout(() => {
        this.$NProgress.done()
        this.loading = false
      }, 1000)
    },
    getCategory () {
      this.$fetch('category').then((res) => {
        this.categoryList = res.data.lists
        this.over()
        this.$store.commit('setFooterView', true)
      }).catch((err) => {
        console.error(err)
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
}
.isFooter {
  margin-top: 50px;
}
</style>
