/* Sku vue组件 */
<template>
  <van-popup v-model="isSkuShow" position="bottom" >
    <div class="skuWrap">
      <van-icon name="close" class="close"  @click="close"/>
      <div class="goods">
        <div class="imgWrap"><img src="//i8.mifile.cn/a1/pms_1524621084.0039673!720x7200.jpg"></div>
        <div class="content">
          <div class="goodsPrice"><van-icon name="balance-pay" color="rgb(255, 103, 0)"/><div class="curPrice">1599</div></div>
          <div class="goodsName">小米6X 4GB+64GB 流沙金</div>
        </div>
      </div>
      <div class="skuContent">
        <div
          v-for="(buyOption, index) in buyOption"
          :key="index"
          class="version">
          <h2>{{buyOption.name}}</h2>
          <ul>
            <li
              v-for="(list,index) in buyOption.list"
              :key="index"
              :class="{ 'active': list.isOn, 'maxWidth': list.price}"
              @click="changeChoose(buyOption,index)"
            >
              <div class="name">{{list.name}}</div>
              <div class="price" v-if="list.price">{{list.price}}</div>
            </li>
          </ul>
        </div>
        <div class="stepper">
          <div class="title">购买数量</div>
          <van-stepper
            v-model="goodsNum"
            integer
            :min="1"
            :max="3"
          />
        </div>
        <div class="serve">
          <div class="title">保障服务<a href="javascript:;"><van-icon name="question"/></a><span v-show="choose">手机意外摔落/进水/碾压等损坏</span></div>
          <div class="content" :class="{'active':choose}" @click="readServe">意外保障服务  179元</div>
          <div class="agree">
            <van-icon v-if="!choose" name="check" @click="readServe"/>
            <van-icon  v-if="choose" name="checked" color="#fd5723" @click="readServe"/>
            <span>我已阅读</span>
            <a href="">服务条款 | </a><a href="">常见问题</a>
          </div>
        </div>
      </div>
    </div>
    <div class="addCart">加入购物车</div>
  </van-popup>
</template>

<script>
import Vue from 'vue'
import { goodsId, buyOption, goodsInfo } from '@/components/product/sku.js'
import { Stepper, Popup } from 'vant'
import bus from '@/bus.js'
Vue.use(Popup).use(Stepper)
export default {
  name: 'sku',
  props: {

  },
  data () {
    return {
      isSkuShow: false,
      goodsNum: 1,
      goodsId,
      buyOption,
      goodsInfo,
      choose: true
    }
  },
  created () {
    bus.$on('isSkuShow', (val) => {
      this.isSkuShow = val
    })
  },
  methods: {
    close () {
      this.isSkuShow = false
    },
    changeChoose (buyOption, index) {
      buyOption.list.forEach((item, i) => {
        if (i === index) {
          item.isOn = true
        } else {
          item.isOn = false
        }
      })
    },
    readServe () {
      this.choose = !this.choose
    }
  }
}
</script>

<style scoped>
.skuWrap {
  position: relative;
  padding: 16px;
  color: rgba(0,0,0,.87);
}
.skuWrap i.close {
  position: absolute;
  right: 16px;
}
/* goods */
.goods {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.goods .imgWrap {
  width: 105px;
}
.goods .imgWrap img {
  width: 100%;
}
.goods .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.goods .goodsPrice {
  display: flex;
  font-size: 24px;
}
.goods .goodsPrice .curPrice {
  color: #ff6700;
  font-weight: 700;
}
.goods .goodsName {
  font-size: 16px;
}
/* skuContent */
.skuContent {
  max-height: 312.5px;
  overflow-y: scroll;
}
.version {
  text-align: left;
}
.version h2 {
  font-size: 14px;
  padding: 16.67px 0 8.33px 0;
}
.version ul {
  display: flex;
  flex-wrap: wrap;
}
.version li.maxWidth {
  width: 100%;
}
.version li {
  display: flex;
  justify-content: space-between;
  padding: 12.5px 16.67px;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: 2px;
  margin-top: 8.3px;
  margin-left: 8.3px;
  font-size: 12px;
}
.active {
  border-color: #ff6700!important;
  color: #ff6700;
}
.skuContent .stepper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16.67px 0;
  font-size: 14px;
}
/* serve */
.serve {
  padding: 16.67px 0;
}
.serve .title {
  text-align: left;
  font-size: 14px;
  margin-bottom: 8.3px;
}
.serve .title a ,
.serve .title span{
  font-size: 13px;
  margin-left: 5px;
  color: rgba(0,0,0,.54);
}
.serve .title a {
  vertical-align: middle;
}
.serve .title span{
  font-size: 14px;
}
.serve .content{
  border: 1px solid rgba(0,0,0,.15);
  max-width: 160px;
  line-height: 37px;
  font-size: 12px;
  margin-left: 10px;
  margin-top: 15px;
}
.serve .agree {
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-left: 10px;
  margin-top: 10px;
}
.serve .agree i{
  font-size: 16px;
  margin-right: 5px;
}
.serve .agree a {
  color: #ff6700;
  margin-right: 5px;
}
/* addCart */
.addCart {
  height: 52.08px;
  line-height: 52.08px;
  background: #ff6700;
  color: #fff;
  text-align: center;
}
</style>
