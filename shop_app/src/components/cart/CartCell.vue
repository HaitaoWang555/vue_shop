/* cartCell vue组件 */
<template>
  <div class="cartCell" v-if="productList">
    <ol>
      <li
        v-for="(item, index) in productList"
        :key="index"
      >
        <div class="cartItem">
          <div class="checkWrap"><van-checkbox v-model="item.is_checked" /></div>
          <div class="imgWrap"><img :src="item.image_url"></div>
          <div class="contentWrap">
            <p class="name">{{item.product_name}}</p>
            <p class="price">售价：{{item.salePrice}}元</p>
            <div class="contral">
              <van-stepper
                v-model="item.num"
                integer
                :default-value="item.num"
                :min="1"
                :max="item.goodsNum"
              />
              <van-icon name="delete" @click="delProduct(index)"/>
            </div>
          </div>
        </div>
        <div class="other"
          v-if="item.is_checked"
          :class="{'isServe':isServe[index].is_checked}"
        >
          <div
            v-if="isServe[index].is_checked"
            v-for="(servePruduct, i) in item.service_bargins"
            :key="i+'servePruduct'"
          >
            <div class="servePruduct"
              v-for="(serveInfo) in servePruduct.service_info"
              :key="serveInfo.service_goods_id"
            >
              <div class="imgWrap"><img :src="serveInfo.service_image_url"></div>
              <div class="contentWrap">
                <p class="name">{{serveInfo.service_name}}</p>
                <p class="price">售价：{{serveInfo.service_price}}元</p>
                <div class="contral">
                  <van-stepper
                    v-model="item.serveNum"
                    integer
                    :min="1"
                    :default-value="item.serveNum"
                    :max="item.num"
                  />
                  <van-icon name="delete" @click="hideServeProduct(index)"/>
                </div>
              </div>
            </div>
          </div>

          <div class="gift"
            v-if="item.actives"
            v-for="(active, index) in item.actives"
            :key="index"
          >
            <div class="imgWrap"><img :src="active.imgUrl"></div>
            <div class="contentWrap">
              <p class="name">{{active.title}}</p>
              <div class="contral">
                <van-stepper
                  v-model="item.num"
                  disabled
                  :default-value="item.num"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="item.is_checked && !isServe[index].is_checked"
          v-for="(serve) in item.service_bargins"
          :key="serve.active_id"
        >
          <div
            class="serve"
            v-for="(serveInfo) in serve.service_info"
            :key="serveInfo.phone_accidentIns_sku"
          >
            <img :src="serveInfo.service_image_url">
            <p class="name">{{serveInfo.service_short_name}} {{serveInfo.service_price}}</p>
            <p class="checked" @click="choseServe(serve, index)">选购</p>
          </div>
        </div>
      </li>
    </ol>
    <van-popup v-model="isPopupShow" position="bottom" >
      <div class="popup">
        <van-icon name="close" @click="close"/>
        <h2>购买服务</h2>
        <SkuServe :serviceBargins="thisServe"/>
        <div class="footer">
          <div class="item text" v-if="!choose">请选择服务类型</div>
          <div class="item text" v-if="choose">已选择{{thisServe.length}}项服务</div>
          <div class="item btn" @click="showServeProduct">确定</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Stepper, Checkbox, Popup } from 'vant'
import SkuServe from '@/components/product/SkuServe.vue'
import bus from '@/bus.js'

export default {
  name: 'cartCell',
  created () {
    this.getProduct()
    bus.$on('choose', (val) => {
      this.choose = val
    })
  },
  components: {
    [Stepper.name]: Stepper,
    [Checkbox.name]: Checkbox,
    [Popup.name]: Popup,
    SkuServe
  },
  data () {
    return {
      productList: null,
      isPopupShow: false,
      thisServe: [],
      choose: false,
      isServe: [],
      curIndex: null,
      totalNum: 0,
      totalPrice: 0
    }
  },
  watch: {
    productList: {
      deep: true,
      handler (val) {
        let productNum = 0
        let productPrice = 0
        val.forEach((item, i) => {
          if (item.is_checked) {
            if (item.actives) {
              productNum += (item.num * (item.actives.length + 1) + item.serveNum)
            } else {
              productNum += item.num + item.serveNum
            }
            if (this.isServe[i].is_checked) {
              productPrice += item.num * item.salePrice + item.serveNum * this.isServe[i].servePrice
            } else {
              productPrice += item.num * item.salePrice
            }
          }
        })
        this.totalNum = productNum
        this.totalPrice = productPrice
        bus.$emit('productNum', this.totalNum)
        bus.$emit('productPrice', this.totalPrice)
      }
    }
  },
  methods: {
    getProduct () {
      this.$fetch('cart').then((res) => {
        this.productList = JSON.parse(JSON.stringify(res.data.productList))
        this.initData()
      })
    },
    initData () {
      for (let i = 0; i < this.productList.length; i++) {
        this.isServe.push({is_checked: false})
      }
    },
    close () {
      this.isPopupShow = false
    },
    choseServe (serve, index) {
      this.thisServe = []
      this.isPopupShow = true
      this.thisServe.push(serve)
      this.isServe[index].servePrice = serve.service_info[0].service_price
      this.curIndex = index
    },
    showServeProduct () {
      this.isPopupShow = false
      this.isServe[this.curIndex].is_checked = true
      this.productList[this.curIndex].serveNum = 1
    },
    hideServeProduct (index) {
      this.isServe[index].is_checked = false
      this.productList[index].serveNum = 0
    },
    delProduct (index) {
      this.productList.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.cartCell {
  margin-top: 8px;
}
li {
  margin: 10px;
  position: relative;
}
.van-checkbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.checkWrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}
.cartItem ,.gift{
  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: left;
}
.other {
  margin-top: 70px;
}
.other.isServe {
  margin-top: 0;
}
.servePruduct,
.gift {
  margin-left: 30px;
  margin-top: 10px;
}
.servePruduct {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.servePruduct .contentWrap,
.gift .contentWrap {
  display: flex;
  flex-grow: 1;
  text-align: left;
  flex-direction: column;
  justify-content: center;
}
.imgWrap {
  border: 1px solid #eee;
  border-radius: 2px;
  margin-right: 10px;
}
.imgWrap img {
  width: 90px;
}
.contentWrap p {
  margin: 0 16px 8px 0;
}
.contentWrap p.name {
  font-size: 14px;
  color: #666;
  line-height: 16px;
}
.contentWrap p.price {
  font-size: 12px;
  color: #999;
  line-height: 12px;
}
.contentWrap .contral {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.serve {
  position: absolute;
  left: 0;
  top: 110px;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  height: 42px;
  margin: 0 10px;
  border: 1px solid #f6f6f6;
  border-radius: 2px;
  background-color: #f6f6f6;
}
.serve img {
  width: 28px;
  margin-right: 6px;
}
.serve .name {
  flex-grow: 1;
  text-align: left;
}
.serve .checked {
  color: #ff5722;
  margin-right: 20px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.footer .item {
  width: 50%;
  height: 52px;
  line-height: 52px;
}
.footer .item.text {
  text-align: left;
  padding-left: 16px;
  font-size: 12px;
  color: rgba(0,0,0,.54);
}
.footer .item.btn {
  background-color: #f56600;
  color: #fff;
}
</style>
<style>
.cartCell .van-checkbox--checked {
  border-color: #fd5723;
  background-color: #fd5723;
}
</style>
