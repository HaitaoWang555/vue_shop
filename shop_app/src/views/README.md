## APP下的组件
### Home首页组件
  1. 引入components/homeChildren下的组件形成Tab切换形式
  2. 加入组件切换时发生时的动画 保留组件切换时的状态
  ```
  <transition-group tag="div" :name="transitionName">
    <div v-for="xxx">
      <keep-alive>
        <component :is="xxx"></component>
      </keep-alive>
    </div>
  </transition-group>
  ```
  3. loading控制loading组件是否出现
  4. `getNavList` 获取Home页数据
### Category 分类组件
  1. 引入 components/Category 下的组件 组成页面结构
  2. loading控制loading组件是否出现 
  3. 在路由切换前获取数据加载组件
  ```
  beforeRouteEnter (to, from, next) {
    next(vm => vm.getCategory())
  }
  ```
  4. `getCategory` 获取 Category 页数据
### Login 登录页组件
  1. computed 通过计算属性来切换不同登录方式
  2. `v-model` form表单提交
### Product 产品页组件
  1. 引入 /components/product/ 下的组件 组成页面结构
  2. loading控制loading组件是否出现
### Cart 购物车页组件

### User 我的页组件
