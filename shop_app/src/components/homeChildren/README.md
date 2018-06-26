## 首页下的子组件
### Recommend推荐页组件
  1. 此组件包含推荐商品
### Recommend组件API
  1. 引用Swiper、Tabbar、DividerLine组件组成页面结构
  2. 实例创建时获取数据，将数据传给子组件 渲染页面
```
<Swiper :msg="swiperImages"/>
<Tabbar :msg="tabList"/>
<DividerLine bgColor="rgb(245, 245, 245)" />

created () {
  this.recommendActive()
}
```
### 其余组件构成相似，仅是数据不同