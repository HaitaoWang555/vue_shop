/* Sku vue组件 */
<template>
  <van-popup v-model="isSkuShow" position="bottom" >
    <div class="skuWrap" v-if="selectedGood">
      <van-icon name="close" class="close"  @click="close"/>
      <div class="goods">
        <div class="imgWrap"><img :src="selectedGood.img_url"></div>
        <div class="content">
          <div class="goodsPrice"><van-icon name="balance-pay" color="rgb(255, 103, 0)"/><div class="curPrice">{{selectedGood.price}}</div></div>
          <div class="goodsName">{{selectedGood.name}}</div>
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
              :key="list.prop_value_id"
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
        <SkuServe :serviceBargins="selectedGood.service_bargins"/>
        <div class="addCart" @click="addCart(selectedGood.name, goodsNum, selectedGood.price)">加入购物车</div>
      </div>
    </div>
  </van-popup>
</template>

<script>
import Vue from 'vue'
import SkuServe from '@/components/product/SkuServe.vue'
import { Stepper, Popup } from 'vant'
import bus from '@/bus.js'
Vue.use(Popup).use(Stepper)
export default {
  name: 'sku',
  components: {
    SkuServe
  },
  data () {
    return {
      isSkuShow: false,
      goodsNum: 1,
      goodsId: null,
      selectedGood: null,
      selectedSKU: [],
      buyOption: null,
      goodsInfo: null
    }
  },
  created () {
    bus.$on('isSkuShow', (val) => {
      this.isSkuShow = val
    })
    this.getSku()
  },
  methods: {
    initData () {
      this.selectedGood = this.goodsInfo.find(item => {
        return item.goods_id === this.goodsId
      })
      this.selectedSKU = JSON.parse(JSON.stringify(this.selectedGood.prop_list))
      this.buyOption.forEach((item, i) => {
        let skuId = this.selectedGood.prop_list[i].prop_value_id
        item.list.forEach((list, i) => {
          if (skuId === list.prop_value_id) {
            list.isOn = true
          }
        })
      })
    },
    getSku () {
      this.$fetch('sku').then((res) => {
        this.goodsId = res.data.goodsId
        this.buyOption = JSON.parse(JSON.stringify(res.data.buyOption))
        this.goodsInfo = JSON.parse(JSON.stringify(res.data.goodsInfo))
        this.initData()
      })
    },
    close () {
      this.isSkuShow = false
    },
    changeChoose (buyOption, index) {
      let curSKUIndex = this.selectedSKU.findIndex(item => {
        return item.prop_cfg_id === buyOption.prop_cfg_id
      })
      buyOption.list.forEach((item, i) => {
        if (i === index) {
          item.isOn = true
          this.selectedSKU[curSKUIndex].prop_value_id = item.prop_value_id
        } else {
          item.isOn = false
        }
      })
      this.selectedGood = this.goodsInfo.find(item => {
        return JSON.stringify(item.prop_list) === JSON.stringify(this.selectedSKU)
      })
      this.goodsId = this.selectedGood.goods_id
    },
    readServe () {
      this.choose = !this.choose
    },
    addCart (name, goodsNum, price) {
      let Product = name + goodsNum
      bus.$emit('changeProduct', Product)
      bus.$emit('changeGoodsView', price)
      this.isSkuShow = false
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
/* addCart */
.addCart {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52.08px;
  line-height: 52.08px;
  background: #ff6700;
  color: #fff;
  text-align: center;
}
</style>
