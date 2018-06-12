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
使用 :placeholder 来动态修改 input 的 placeholder 等同于 v-bind:placeholder .v-bind 动态地绑定一个或多个特性，或一个组件 prop 到表达式

```
<input v-model="message" placeholder="edit me" @input="clearError">
<p>Message is: {{ message }}</p>
```
v-model 指令在表单 input 及 textarea 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素 @input 监听input

```
create () {
  this.getNavList()
}
```
在实例创建完成后被立即调用

```
destroyed () {
  NProgress.remove()
}
```
Vue 实例销毁后调用