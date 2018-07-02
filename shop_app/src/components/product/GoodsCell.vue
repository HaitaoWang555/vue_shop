/* GoodsCell vue组件 */
<template>
  <div class="goodsCell" @click="clickEvent(to, tag, title, content)">
    <div class="goodsCellCentent">
      <div class="title">{{title}}</div>
      <div class="value">
        <div class="tag" v-if="tag">{{tag}}</div>
        <div class="content">{{content}}</div>
        <div class="sign" v-if="sign">{{sign}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsCell',
  props: {
    title: {
      default: null
    },
    tag: {
      default: null
    },
    content: {
      default: null
    },
    sign: {
      default: null
    },
    to: {
      default: null
    },
    clickEvent: {
      type: Function,
      default: function () {}
    }
  },
  components: {

  },
  methods: {
  }
}
</script>

<style scoped>
.goodsCell {
  padding: 0 16px;
  background-color: white;
}
.goodsCellCentent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  padding: 8px 0;
}
.goodsCell:first-child .goodsCellCentent {
  border-top: 1px solid #f4f4f4;
  border-bottom: none;
}
.goodsCellCentent {
  border-top: none;
  border-bottom: 1px solid #f4f4f4;
}
.title {
  min-width: 42px;
  text-align: left;
  color: rgba(0,0,0,.54);
}
.value {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: flex-start;
  color: rgba(0,0,0,.87);
  height: 20px;
  line-height: 20px;
}
.value::after {
  content: '';
  position: absolute;
  right: 5.12px;
  top: 50%;
  width: 8px;
  height: 8px;
  border-left: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: translate3d(0,-50%,0) rotate(135deg);
}
.value .tag {
  margin-right: 5px;
  color: #f56600;
  border-radius: 1px;
  font-size: 12px;
  border-color: #f56600;
  border: 1px solid;
  transform: scale(.8)
}
.sign {
  color: #f56600;
}
</style>
