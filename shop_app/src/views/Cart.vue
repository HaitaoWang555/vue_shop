/* 购物车 vue组件 */
<template>
  <div class="cart">
    <!-- loading -->
    <Loading class="isFooter" v-if="loading" />
    <template  v-if="!loading">
      <AppHeader title="购物车" />
      <van-cell-group>
        <van-cell title="登录后享受更多优惠" is-link value="去登录" />
      </van-cell-group>
      <CartCell />
      <Recommend
        :title="recommend.title"
        :recommendList="recommend.recommend_list"
      />
      <div class="footer">
        <div class="item showPrice">
          <p>共{{productNum}}件 金额：</p>
          <p><span>{{productPrice}}</span>元</p>
        </div>
        <div class="item goCategory"><router-link to="/category">继续购物</router-link></div>
        <div class="item goPlay"><router-link to="/login">去结算</router-link></div>
      </div>
    </template>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import AppHeader from '@/components/AppHeader.vue'
import CartCell from '@/components/cart/CartCell.vue'
import Recommend from '@/components/product/Recommend.vue'
import { Cell, CellGroup } from 'vant'

export default {
  name: 'cart',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    Loading,
    AppHeader,
    CartCell,
    Recommend
  },
  data () {
    return {
      loading: true,
      recommend: null
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('setFooterView', false)
    })
  },
  created () {
    this.$NProgress.start()
    this.getCart()
  },
  computed: {
    productNum () {
      return this.$store.getters.getProductNum
    },
    productPrice () {
      return this.$store.getters.getProductPrice
    }
  },
  destroyed () {
    this.$NProgress.remove()
  },
  methods: {
    getCart () {
      this.$fetch('recommendList').then((res) => {
        this.recommend = res.data.recommend
        this.$NProgress.done()
        this.loading = false
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.cart {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 800px;
}
.isFooter {
  margin-top: 50px;
}
.recommend {
  margin-bottom: 57px;
}
.van-cell-group {
  margin-top: 56px;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
  background-color: white;
}
.footer .item {
  flex-grow: 1;
  height: 52px;
  line-height: 52px;
  font-size: 15px;
}
.showPrice {
  max-width: 125px;
  padding-top: 6px;
}
.showPrice p:first-child {
  height: 12px;
  line-height: 12px;
  font-size: 12px;
}
.showPrice p {
  height: 28px;
  line-height: 28px;
  color: #999;
}
.showPrice p span {
  color: #ff5722;
  font-size: 1.5em;
  font-weight: bold;
}
.goCategory {
  background-color: #f4f4f4;
}
.goPlay {
  background-color: #ff6700;
  color: white;
}
</style>
