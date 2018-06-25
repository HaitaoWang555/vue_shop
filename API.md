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

```
  components: {
    Footer
  }
```
components 包含 Vue 实例可用组件的哈希表

```
过渡的类名
v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
v-leave: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除
```

```
watch: {
  '$route' (to, from) {
    this.transitionName = to.meta.index < from.meta.index ? 'page-right' : 'page-left'
  }
}
```
$route属性是响应式的，所以你可以就使用一个 watch 去响应路由的改变

```
routes: [
  {
    path: '/',
    redirect: 'home'
  }
]
```
路由的重定向

```
// 新建bus.js
import Vue from 'vue'
const bus = new Vue()
export default bus
// Home 
 bus.$emit('loading', false)
// Footer 
created () {
  bus.$on('loading', (val) => {
    this.loading = val
  })
}
```
组件通信(全局bus) vm.$on监听当前实例上的自定义事件。事件可以由vm.$emit触发

```
:ref="xxx"
this.$nextTick(() => {
  this.$refs[xxx]
})
```
ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
当 v-for 用于元素或组件的时候，引用信息将是包含 DOM 节点或组件实例的数组
初始渲染的时候你不能访问它们

```
beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
```
在导航完成前获取数据 路由改变前，组件就已经渲染完了