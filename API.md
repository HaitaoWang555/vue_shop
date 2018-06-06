## 项目中使用到的API
```
data () {
  return {
    isIdLogin: true
  }
}
```
Vue 实例的数据对象。Vue 将会递归将 data 的属性转换为 getter/setter，从而让 data 的属性能够响应数据变化。对象必须是纯粹的对象 (含有零个或多个的 key/value 对)

```
computed: {
  subBtn () {
    return this.isIdLogin ? '用户名密码登录' : '手机短信登录/注册'
  }
}
```
计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例

```
methods: {
  changeLogin () {
    this.isIdLogin = !this.isIdLogin
  }
}
```
methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例
```
<div v-show="isError" class="errorInfo"></div>

...

data () {
  return {
    isError: false
  }
}
```
根据表达式之真假值，切换元素的 display CSS 属性。
```
<input type="text" name="user" id="username" :placeholder="placeholderTxt">

...

placeholderTxt () {
  return this.isIdLogin ? '邮箱/手机号码/小米ID' : '手机号码'
},
```
使用 :placeholder 来动态修改 input 的 placeholder