## src目录结构
### api
  接口文件
### assets
  静态文件包含图片、字体
### components
  公用组件
### views
  主页面
### APP.vue
  1. 入口页
  2. `<router-view/>`与`<Footer />`组成
  3. `watch` 处理路由切换时动画效果
  ``` 
  <transition :name="transitionName">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </transition>

  ----

  watch: {
    '$route' (to, from) {
      if (!from.name) {
        this.transitionName = ''
        return
      }
      this.transitionName = to.meta.index < from.meta.index ? 'page-right' : 'page-left'
    }
  }
  ```
### main.js
  引入各种配置
### router.js
### store.js
