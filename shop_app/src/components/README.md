## 公用组件库
### AppHeader组件
  1. APP的头部组件，默认事件`this.$router.go(-1)`左箭头可返回上一路由
  2. title 接收父组件传值
### DividerLine组件
  1. 分割线 bgColor 接收父组件传值
### Footer组件
  1. APP底部导航组件 `v-if="loading"`控制组件是否加载
### Loading组件
  1. loading展示
### Swiper组件
  1. 修改vant的swiper组件 msg 接受父组件传值为图片地址
### Tabbar组件 
  1. 修改vant的Tabbar组件 msg 接受父组件传值为标题
### Tabs组件
  2. 修改vant的Tabs切换组件 navList、onClick、active接受父组件传值分别为标题、点击事件、默认激活值