/* Product vue组件 */
<template>
  <div class="product">
    <Loading class="isFooter" v-if="loading" />
    <template  v-if="!loading">
      <ProductHeader />
      <Swiper :msg="swiperImages"/>
      <Goodsview :goodsview="goodsview"/>
      <div class="goodsCellWrap">
        <GoodsCell
        v-for="(goodsCell, index) in goodsCell"
        :key="index"
        :index="index"
        :title="goodsCell.title"
        :tag="goodsCell.value.tag"
        :to="goodsCell.value.to"
        :content="goodsCell.value.content"
        :sign="goodsCell.value.sign"
        :clickEvent="isPopupShow"
        />
      </div>
      <div class="goodsServeWrap">
        <GoodsServe
          v-for="(goodsServe, index) in pruductData.goodsServe"
          :key="index"
          :centent="goodsServe.centent"
        />
      </div>
      <GoodsComment
        :commentsTotal="goodsCommentDetail.comments_total"
        :satisfyPer="goodsCommentDetail.satisfy_per"
        :commentsBad="goodsCommentDetail.comments_bad"
        :userName="goodsCommentList.user_name"
        :userAvatar="goodsCommentList.user_avatar"
        :addTime="goodsCommentList.add_time"
        :commentContent="goodsCommentList.comment_content"
        :commentImages="goodsCommentList.comment_full_images"
        :replyContent="goodsCommentList.reply_content"
      />
      <GoodsDescription
        :allDec="allDec"
        :partDec="partDec"
      />
      <Recommend
        v-if="isRecommend"
        :title="recommend.title"
        :recommendList="recommend.recommend_list"
      />
      <Popup
        :title="popupTitle"
        :tag="popupTag"
        :content="popupContent"
      />
      <Sku />
      <AreaSelect />
      <GoodsAction />
    </template>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import Swiper from '@/components/Swiper.vue'
import ProductHeader from '@/components/product/ProductHeader.vue'
import Goodsview from '@/components/product/Goodsview.vue'
import GoodsCell from '@/components/product/GoodsCell.vue'
import GoodsServe from '@/components/product/GoodsServe.vue'
import GoodsComment from '@/components/product/GoodsComment.vue'
import GoodsDescription from '@/components/product/GoodsDescription.vue'
import Recommend from '@/components/product/Recommend.vue'
import Popup from '@/components/Popup.vue'
import Sku from '@/components/product/Sku.vue'
import AreaSelect from '@/components/product/AreaSelect.vue'
import GoodsAction from '@/components/product/GoodsAction.vue'
import bus from '@/bus.js'
export default {
  name: 'product',
  data () {
    return {
      loading: true,
      swiperImages: null,
      goodsview: null,
      goodsCell: null,
      pruductData: null,
      goodsCommentDetail: null,
      goodsDescription: null,
      allDec: null,
      partDec: null,
      goodsCommentList: null,
      recommend: null,
      isRecommend: false,
      popupTitle: null,
      popupContent: null,
      popupTag: null
    }
  },
  components: {
    Loading,
    Swiper,
    ProductHeader,
    Goodsview,
    GoodsCell,
    GoodsServe,
    GoodsComment,
    GoodsDescription,
    Recommend,
    Popup,
    Sku,
    AreaSelect,
    GoodsAction
  },
  beforeRouteEnter (to, from, next) {
    next(bus.$emit('loading', true))
  },
  created () {
    this.$NProgress.start()
    this.getProduct()
  },
  destroyed () {
    this.$NProgress.remove()
  },
  methods: {
    getProduct () {
      this.$fetch('product').then((res) => {
        this.pruductData = res.data
        this.allDec = JSON.parse(JSON.stringify(this.pruductData.goodsDescription))
        this.goodsDescription = this.pruductData.goodsDescription
        this.partDec = this.setallDec(this.goodsDescription)
        this.swiperImages = this.pruductData.swiperImages
        this.goodsview = this.pruductData.goodsview
        this.goodsCell = this.pruductData.goodsCell
        this.goodsCommentDetail = this.pruductData.goodsComment.detail
        this.goodsCommentList = this.pruductData.goodsComment.list[0]
        this.loading = false
        this.$NProgress.done()
      }).then(this.$fetch('recommendList').then((res) => {
        this.recommend = res.data.recommend
        this.isRecommend = true
      })).catch((err) => {
        console.log(err)
      })
    },
    setallDec (data) {
      data.forEach(item => {
        if (item.tabContent.length > 3) {
          item.tabContent = item.tabContent.slice(0, 3)
        }
      })
      return data
    },
    isPopupShow (to, tag, title, content, index) {
      if (to === 'gift') {
        this.popupTitle = title
        this.popupContent = content
        this.popupTag = tag
        bus.$emit('isPopupShow', true)
      }
      if (to === 'sku') {
        bus.$emit('isSkuShow', true)
        bus.$on('changeProduct', (val) => {
          this.goodsCell[index].value.content = val
        })
        bus.$on('changeGoodsView', (val) => {
          this.goodsview.goodsPrice = val
        })
      }
      if (to === 'area') {
        bus.$emit('isAreaShow', true)
        bus.$on('confirm', (val) => {
          this.goodsCell[index].value.content = ''
          val.forEach((item) => {
            this.goodsCell[index].value.content += (item.name + ' ')
          })
        })
      }
    }
  }
}
</script>

<style scoped>
.product .isFooter {
  margin-top: 50px!important;
}
.product {
  margin-bottom: 50px;
  background-color: #efefef;
}
.product .goodsCell:first-child {
  margin-bottom: 4px;
}
.product .goodsServeWrap {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px 0;
  background-color: white;
}
.goodsComment {
  background-color: white;
  margin-top: 8px;
}
</style>
<style>
/* Product 组件下轮播样式 */
.product .van-swipe img{
  width: 375px;
  height: 412.5px;
}
</style>
