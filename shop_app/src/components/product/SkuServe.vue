/* SkuServe vue组件 */
<template>
  <div class="skuServe">
    <div class="serve"
      v-for="(serve) in serviceBargins"
      :key="serve.type_name"
    >
      <div class="title">
        {{serve.type_name}}
        <a :href="serve.service_url"><van-icon name="question"/></a>
        <span v-show="choose"
          v-for="(serveInfo) in serve.service_info"
          :key="serveInfo.service_goods_id"
        >
        {{serveInfo.service_desc}}
        </span>
      </div>
      <div
        v-for="(serveInfo) in serve.service_info"
        :key="serveInfo.phone_accidentIns_sku"
        @click="readServe"
      >
        <div class="content"
          :class="{'active':choose}"
        >
        {{serveInfo.service_short_name}}{{serveInfo.service_price}}
        </div>
        <div class="agree">
          <van-icon v-show="!choose" name="check" click="readServe"/>
          <van-icon  v-show="choose" name="checked" color="#fd5723" click="readServe"/>
          <span>我已阅读</span>
          <a
            v-for="(acc) in serveInfo.phone_accidentIns"
            :key="acc.url"
            :href="acc.url">{{acc.desc}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skuServe',
  props: {
    serviceBargins: {
      default: null
    }
  },
  data () {
    return {
      choose: false
    }
  },
  methods: {
    readServe () {
      this.choose = !this.choose
      this.$store.commit('setServeChoose', this.choose)
    }
  }
}
</script>

<style scoped>
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
  padding: 0 5px;
  border-right: 1px solid;
}
.serve .agree a:last-child {
  border-right: none;
}
.active {
  border-color: #ff6700!important;
  color: #ff6700;
}
</style>
