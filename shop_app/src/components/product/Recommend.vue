/* Recommend 商品推荐 vue组件 */
<template>
  <div class="recommend">
    <h2 v-if="title">{{title}}</h2>
    <ul v-if="recommendList">
      <li
      v-for="(item, index) in recommendList"
      :key="index"
      >
      <div class="imgWrap"><img v-lazy="item.image_url"></div>
      <div class="goodsInfo">
        <div class="goodsName">{{item.name}}</div>
        <div class="price">
          <div class="goodsPrice">
            <van-icon name="balance-pay" color="#ff6700" />
            <div class="curPrice">{{item.price}}</div>
          </div>
          <div class="goodsPrice marketPrice" v-if="item.market_price > item.price">
            <van-icon name="balance-pay" color="rgba(0,0,0,.54)" />
            <div class="curPrice">{{item.market_price}}</div>
          </div>
        </div>
      </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
    title: {
      default: null
    },
    recommendList: {
      default: null
    }
  }
}
</script>

<style scoped>
.goodsPrice {
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
}
.goodsPrice .curPrice {
  color: #ff6700;
  font-weight: 700;
}
.price {
  display: flex;
}
.goodsPrice i {
  font-size: 14px;
}
.marketPrice i {
  font-size: 12px;
}
.price .marketPrice {
  font-size: .8em;
  margin-left: 10px;
}
.marketPrice .curPrice{
  text-decoration: line-through;
}
.marketPrice .curPrice {
  color: rgba(0,0,0,.54);
}
.recommend {
  margin-top: 10px;
  background-color: white;
}
.recommend ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: left;
}
.recommend h2 {
  text-align: left;
  font-weight: normal;
  padding: 10px 16px;
  background-color: white;
  font-size: 16px;
}
.recommend li {
  width: 48%;
}
.imgWrap img {
  width: 100%;
}
.goodsInfo {
  padding-left: 16px;
  padding-top: 15px;
}
.goodsName {
  font-size: 14px;
}
</style>
