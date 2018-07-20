/* tabs vue组件 */
<template>
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
</template>

<script>
import { Tab, Tabs } from 'vant'
export default {
  name: 'Tabs',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  props: {
    navList: {
      navList: null
    },
    onClick: {
      onClick: null
    },
    active: {
      active: 0
    }
  }
}
</script>

<style scoped>
.van-swipe img{
  width: 375px;
  height: 187.5px;
}
</style>
