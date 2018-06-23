/* vue组件 */
<template>
  <div class="listWrap" @touchstart="wrapScroll">
    <div
      v-for="(list, index) in categoryList"
      :key="list.category_id"
      :ref="'category'+index"
      class="list-item">
      <div class="component-list-main">
        <div class="cells_auto_fill">
          <a class="exposure items">
            <img v-lazy="list.category_img">
          </a>
        </div>
        <template v-for="(item,index) in list.category_list">
          <div :key="'title'+index" class="category_title">
            <span>{{item.category_title}}</span>
          </div>
          <CategoryGroup :key="index" :products="item.category_group"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../bus.js'
import CategoryGroup from '@/components/CategoryGroup.vue'
export default {
  name: 'listWrap',
  props: {
    categoryList: {
      default: null
    }
  },
  data () {
    return {
      offsetTop: [],
      scrollTimer: null,
      scrollTop: 0
    }
  },
  components: {
    CategoryGroup
  },
  created () {
    this.$nextTick(() => {
      this.categoryList.forEach((item, index) => {
        this.offsetTop.push(this.$refs['category' + index][0].offsetTop)
      })
      bus.$emit('offsetTop', this.offsetTop)
      bus.$emit('scrollHandler', this.scrollHandler)
    })
  },
  activated () {
    document.querySelector('.listWrap').scrollTo(0, this.scrollTop)
  },
  methods: {
    wrapScroll (e) {
      document.querySelector('.listWrap').addEventListener('scroll', this.scrollHandler)
    },
    scrollHandler () {
      clearTimeout(this.scrollTimer)
      this.scrollTimer = setTimeout(() => {
        this.scrollTop = document.querySelector('.listWrap').scrollTop
        let len = this.offsetTop.length
        for (let index = 0; index < len; index++) {
          if (this.scrollTop >= this.offsetTop[index] && this.scrollTop < this.offsetTop[index + 1]) {
            bus.$emit('curIndex', index)
            console.log(index)
            break
          }
        }
      }, 100)
    }
  }
}
</script>

<style scoped>
.listWrap {
  position: absolute;
  left: 80px;
  right: 0;
  top: 0;
  bottom: 52px;
  margin-top: 52px;
  padding: 2px 16px;
  overflow: auto;
}
.component-list-main .cells_auto_fill .items {
  height: auto!important;
  display: block;
}
.cells_auto_fill .items img {
  width: 260px;
  height: 104px;
  background: #f2f2f2;
}
.component-list-main .category_title {
  background: #fff;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  margin-top: 10px;
  height: 66px;
  line-height: 66px;
  overflow: hidden;
}
.component-list-main .category_title span {
  position: relative;
}
.component-list-main .category_title span:after, .component-list-main .category_title span:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 30px;
  border-top: 1px solid #e0e0e0;
  transform: translate3d(-150%,-50%,0);
}
.component-list-main .category_title span:after {
  left: auto;
  right: 0;
  transform: translate3d(150%,-50%,0);
}
</style>
