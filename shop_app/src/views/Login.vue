<template>
  <div class="login">
    <header class="header">
      <em class="logo"></em>
      <h4>小米账号登录</h4>
    </header>
    <section class="loginForm">
      <form action="">
        <label for="user" class="forUser"><input type="text" name="user" id="username" placeholder="邮箱/手机号码/小米ID"></label>
        <label for="password" class="forPassword"><input type="password" name="password" id="passoord" placeholder="密码"><div class="visible"><i class="icon iconfont icon-kanjianmima-"></i></div></label>
        <div class="errorInfo"><div><i class="icon iconfont icon-error"></i><span class="error-con">请输入帐号</span></div></div>
        <div class="btnWrap"><input type="submit" id="loginBtn" class="commonBtn" value="登录"></div>
      </form>
    </section>
    <section class="otherPanel">
      <div class="changeLogin"><p @click="changeLogin" class="commonBtn">{{subBtn}}</p></div>
      <div class="reverse"><a href=""><span>立即注册</span></a> | <a href=""><span>忘记密码</span></a></div>
      <div class="otherLogin">
        <h4>其它方式登录</h4>
        <ul class="iconLogin ignore"><li><i></i></li><li><i></i></li><li><i></i></li></ul>
      </div>
    </section>
    <footer>
      <ul>
        <li>简体<span>|</span></li>
        <li>常见问题<span>|</span></li>
        <li>隐私政策</li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isIdLogin: true
    }
  },
  computed: {
    subBtn () {
      return this.isIdLogin ? '用户名密码登录' : '手机短信登录/注册'
    }
  },
  methods: {
    changeLogin () {
      this.isIdLogin = !this.isIdLogin
    }
  }
}
</script>

<style scoped>
@import "./css/login.css";
</style>
