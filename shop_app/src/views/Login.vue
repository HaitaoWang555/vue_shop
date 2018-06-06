<template>
  <div class="login">
    <header class="header">
      <em class="logo"></em>
      <h4>小米账号登录</h4>
    </header>
    <section class="loginForm">
      <form action="">
        <label for="user" class="forUser">
          <div v-show="!isIdLogin" class="country_list"><span class="country_code"><tt class="countrycode-value">+86</tt><i class="icon_arrow_down"></i></span></div>
          <input type="text" name="user" id="username" :placeholder="placeholderTxt">
        </label>
        <label for="password" class="forPassword">
          <input v-show="isIdLogin" :type="pwdType" name="password" id="passoord" placeholder="密码">
          <input v-show="!isIdLogin"  type="number" name="smCode" id="smCode" placeholder="短信验证码">
          <div v-show="isIdLogin" @click="changeHide" class="visible"><i v-show="isHide" class="icon iconfont icon-kanjianmima-"></i><i v-show="!isHide" class="icon iconfont icon-biyan"></i></div>
          <div v-show="!isIdLogin" id="codePanel" class="code_panel"><a href="javascript:;" id="getSMSCode">获取验证码</a></div>
        </label>
        <div v-show="isError" class="errorInfo"><div><i class="icon iconfont icon-error"></i><span class="error-con">请输入帐号</span></div></div>
        <div class="btnWrap"><p id="loginBtn" class="commonBtn">{{codeMsg}}</p></div>
      </form>
    </section>
    <section class="otherPanel">
      <div class="changeLogin"><p @click="changeLogin" class="commonBtn">{{subBtn}}</p></div>
      <div class="reverse"><a href="javascript:;"><span>立即注册</span></a> | <a href="javascript:;"><span>忘记密码</span></a></div>
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
      isIdLogin: true,
      isError: false,
      isHide: true
    }
  },
  computed: {
    subBtn () {
      return this.isIdLogin ? '手机短信登录/注册' : '用户名密码登录'
    },
    codeMsg () {
      return this.isIdLogin ? '登录' : '立即登录/注册'
    },
    placeholderTxt () {
      return this.isIdLogin ? '邮箱/手机号码/小米ID' : '手机号码'
    },
    pwdType () {
      return this.isHide ? 'password' : 'text'
    }
  },
  methods: {
    changeLogin () {
      this.isIdLogin = !this.isIdLogin
    },
    changeHide () {
      this.isHide = !this.isHide
    }
  }
}
</script>

<style scoped>
@import "./css/login.css";
</style>
