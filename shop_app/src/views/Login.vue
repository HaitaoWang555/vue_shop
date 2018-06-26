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
          <input :type="inputType" name="user" id="username" v-model="userName" :placeholder="placeholderTxt" @input="clearError">
        </label>
        <label for="password" class="forPassword">
          <input v-show="isIdLogin" :type="pwdType" name="password" id="passoord" placeholder="密码" v-model="password" @input="clearError">
          <input v-show="!isIdLogin"  type="number" name="smCode" id="smCode" placeholder="短信验证码" v-model="smCode" @input="clearError">
          <div v-show="isIdLogin" @click="changeHide" class="visible"><i v-show="isHide" class="icon iconfont icon-kanjianmima-"></i><i v-show="!isHide" class="icon iconfont icon-biyan"></i></div>
          <div v-show="!isIdLogin" id="codePanel" class="code_panel"><a href="javascript:;" :style="codeStyle" @click="getCode" id="getSMSCode">{{codeMsg}}</a></div>
        </label>
        <div v-show="errorMsg" class="errorInfo"><div><i class="icon iconfont icon-error"></i><span class="error-con">{{errorMsg}}</span></div></div>
        <div class="btnWrap"><p id="loginBtn" v-show="!loginLoading" @click="submitForm" class="commonBtn">{{loginBtn}}</p><p v-show="loginLoading" class="commonBtn loading">登录中...</p></div>
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
  created () {
    this.over()
  },
  data () {
    return {
      isIdLogin: true,
      isHide: true,
      countdown: 60,
      timer: null,
      codeMsg: '获取验证码',
      userName: '',
      password: '',
      smCode: '',
      errorMsg: '',
      isClicked: true,
      isGetCodeClicked: true,
      loginLoading: false
    }
  },
  computed: {
    subBtn () {
      return this.isIdLogin ? '手机短信登录/注册' : '用户名密码登录'
    },
    loginBtn () {
      return this.isIdLogin ? '登录' : '立即登录/注册'
    },
    inputType () {
      return this.isIdLogin ? 'text' : 'number'
    },
    placeholderTxt () {
      return this.isIdLogin ? '邮箱/手机号码/小米ID' : '手机号码'
    },
    pwdType () {
      return this.isHide ? 'password' : 'text'
    },
    codeStyle () {
      return this.countdown === 60 ? {
        color: '#2ea5e5'
      } : {
        color: '#999'
      }
    }
  },
  destroyed () {
    clearInterval(this.timer)
    this.$NProgress.remove()
  },
  methods: {
    changeLogin () {
      this.isIdLogin = !this.isIdLogin
      this.userName = ''
      this.errorMsg = ''
      this.password = ''
    },
    changeHide () {
      this.isHide = !this.isHide
    },
    getCode () {
      if (!this.isGetCodeClicked) return
      if (!this.userName) {
        this.errorMsg = '请输入手机号码'
        return
      } else if (!this.checkMobile()) {
        this.errorMsg = '手机号格式不正确'
        return
      }
      this.isGetCodeClicked = false
      this.timer = setInterval(() => {
        this.countdown--
        this.codeMsg = `重新发送${this.countdown}`
        if (this.countdown === 0) {
          clearInterval(this.timer)
          this.timer = null
          this.countdown = 60
          this.codeMsg = '获取验证码'
          this.isGetCodeClicked = true
        }
      }, 1000)
    },
    clearError () {
      this.errorMsg = ''
    },
    checkMobile () {
      const reg = /^((1[3-8][0-9])+\d{8})$/
      return reg.test(this.userName)
    },
    formSuccess () {
      this.isClicked = false
      this.loginLoading = true
      setTimeout(() => {
        this.loginLoading = false
        this.isClicked = true
        console.log('登录成功')
      }, 1000)
    },
    submitForm () {
      if (!this.isClicked) return
      // 不同登录方式
      if (this.isIdLogin) {
        // 用户名登录
        if (!this.userName) {
          this.errorMsg = '请输入账号'
        } else if (!this.password) {
          this.errorMsg = '请输入密码'
        } else {
          this.formSuccess()
        }
      } else {
        // 手机号登录
        if (!this.userName) {
          this.errorMsg = '请输入手机号码'
        } else if (!this.checkMobile()) {
          this.errorMsg = '手机号格式不正确'
        } else if (!this.smCode) {
          this.errorMsg = '请输入短信验证码'
        } else {
          this.formSuccess()
        }
      }
    },
    over () {
      setTimeout(() => {
        this.$NProgress.done()
      }, 1000)
    }
  }
}
</script>

<style scoped>
@import "./css/login.css";
</style>
