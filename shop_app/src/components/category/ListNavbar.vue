/* ListNavbar vue组件 */
<template>
  <div class="listNavbar">
    <ul>
      <li
        v-for="(list,index) in categoryList"
        :key="index"
        :class="index==curIndex?'active':''"
        @click="changeIndex(index)">
        <a>
          <span>{{list.category_name}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import bus from '@/bus.js'
export default {
  name: 'listNavbar',
  props: {
    categoryList: {
      default: null
    }
  },
  data () {
    return {
      curIndex: 0,
      offsetTop: null,
      scrollHandler: null
    }
  },
  created () {
    bus.$on('offsetTop', (val) => {
      this.offsetTop = val
    })
    bus.$on('curIndex', (val) => {
      this.curIndex = val
    })
    bus.$on('scrollHandler', (val) => {
      this.scrollHandler = val
    })
  },
  methods: {
    changeIndex (index) {
      this.curIndex = index
      document.querySelector('.listWrap').removeEventListener('scroll', this.scrollHandler)
      document.querySelector('.listWrap').scrollTop = this.offsetTop[index]
      bus.$emit('scrollTop', this.offsetTop[index])
    }
  }
}
</script>

<style scoped>
.listNavbar {
  position: fixed;
  top: 52px;
  bottom: 52px;
  left: 0;
  width: 80px;
  border-right: 1px solid #efefef;
  background-color: #fefefe;
  overflow: hidden;
}
.listNavbar ul {
  z-index: 90;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  /* 隐藏滚动条 */
  right: -6px;
  padding: 8px 6px 8px 0;
  background: #fefefe;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.listNavbar ul li.active {
  color: #fb7d34;
  transform: scale(1);
}
.listNavbar ul li {
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: transform 0.1s linear;
  transform-origin: center center;
  transform: scale(0.76);
}
.listNavbar ul li span {
  display: inline-block;
}
</style>
