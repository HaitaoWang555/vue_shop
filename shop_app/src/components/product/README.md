## 产品页详情页子组件
### ProductHeader组件
  1. 产品页详情页头部组件，默认事件`this.$router.go(-1)`左箭头可返回上一路由
### GoodsAction组件
  1. 产品页详情页底部导航
### Goodsview组件
  1. 商品信息展示 goodsview 接受 父组件数据
  2. DOMPurify 防止XSS攻击
### goodsCell组件
  1. 商品信息Cell title tag content sign 接受 父组件数据
### GoodsServe组件
  1. 售后服务组件 content 接受 父组件数据
### GoodsComment 
  1. 商品评论组件 接受父组件传数据 
### GoodsDescription
  1. 商品详情组件 接受两组数据，做图片数量切换
### Recommend
  1. 商品推荐组件
### Sku
  1.  `isSkuShow` sku开启与关闭 `goodsNum` 购买产品数量 `goodsId` 选中的产品ID`selectedGood` 选中的产品相关信息`selectedSKU` 选中产品SKU`choose`服务选择
### SkuServe
  1. SKU 服务组件 接受serviceBargins数据渲染组件 向外传递 choose 告知是否选择