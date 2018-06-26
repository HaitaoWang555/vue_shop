## 分类页下的子组件
### ListNavbar组件为左侧导航
  1. 单击可进行快速定位
  2. ListWrap组件滚动结束时，自行定位
### ListNavbar组件API
  1. categoryList 接收来自父组件Category的数据
  2. curIndex 初始值为0，为当前选中状态，ListWrap组件滚动会改写curIndex值
  3. offsetTop为ListWrap中每个子节点距顶部高度
  4. scrollHandler为ListWrap组件中的滚动函数，引入目的是为了阻止ListWrap滚动改写curIndex值
### ListWrap组件为商品展示组件
  1. 滚动会触发ListNavbar组件选中状态
### ListWrap组件API
  1. categoryList 接收来自父组件Category的数据
  2. `:ref=""` 定义子节点位置
  3. offsetTop为ListWrap中每个子节点距顶部高度`this.offsetTop.push(this.$refs[xxx][0].offsetTop)`
  4. scrollTop值为ListWrap组件滚动的高度，受ListWrap组件滚动高度或者单击ListNavbar组件时ListWrap组件滚动高度控制，这样可以保证无论用户采用滚动还是单击行为都可以记录当前滚动高度，再次进入该组件时，进行还原
  5. 使用了CategoryGroup组件为每个产品添加链接
### CategoryGroup组件为商品
  1. 为每个商品添加链接
### CategoryGroup组件API
  1. `products` 商品数组
  2. 浮动布局


  