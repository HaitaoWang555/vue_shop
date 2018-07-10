/* User vue组件 */
<template>
  <div class="user">
    <router-link to="/login">
      <header>
        <div class="imgWrap"><img src="../assets/images/avatar.png"></div>
        <div class="content">登录/注册</div>
      </header>
    </router-link>
    <div class="userContent">
      <div class="order cell"><span>我的订单</span><span>全部订单</span></div>
      <ul class="tabrouter">
        <li><i class="icon dfk"></i><span>代付款</span></li>
        <li><i class="icon dsh"></i><span>待收货</span></li>
        <li><i class="icon thx"></i><span>退换修</span></li>
      </ul>
      <DividerLine/>
      <div class="tabLink member"><i class="icon"></i><div class="cell border-bottom "><span>会员中心</span></div></div>
      <div class="tabLink wallet"><i class="icon"></i><div class="cell"><span>我的优惠</span></div></div>
      <DividerLine/>
      <div class="tabLink service"><i class="icon"></i><div class="cell border-bottom"><span>服务中心</span></div></div>
      <div class="tabLink mihome"><i class="icon"></i><div class="cell"><span>小米之家</span></div></div>
      <DividerLine/>
      <div class="tabLink fcode"><i class="icon"></i><div class="cell"><span>F码通道</span></div></div>
      <DividerLine/>
      <div class="tabLink setting"><i class="icon"></i><div class="cell"><span>设置</span></div></div>
    </div>
  </div>
</template>

<script>
import bus from '@/bus.js'
import DividerLine from '@/components/DividerLine.vue'
export default {
  name: 'user',
  components: {
    DividerLine
  },
  beforeRouteEnter (to, from, next) {
    next(bus.$emit('loading', false))
  },
  created () {
    this.$NProgress.start()
    this.over()
  },
  destroyed () {
    this.$NProgress.remove()
  },
  methods: {
    over () {
      setTimeout(() => {
        this.$NProgress.done()
      }, 1000)
    }
  }
}
</script>

<style scoped>
@import "./css/user.css";
</style>
