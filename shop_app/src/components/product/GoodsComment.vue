/* GoodsComment 产品评论 vue组件 */
<template>
<div class="goodsComment">
  <div class="comment-view space-top isline">
    <div class="comment-count">用户评价({{commentsTotal}})</div>
      <div class="comment-degree">{{satisfyPer}}%<span>满意</span>
    </div>
  </div>
  <div class="comment-box">
    <div class="item">
      <div class="comment-header align-center">
        <div class="avatar-img-box">
          <img  :src="userAvatar">
        </div>
        <div class="user-info flex">
            <p class="name">{{userName}}</p>
            <p class="comment-date">{{addTime}}</p>
        </div>
        <div class="like"><span >超爱</span></div>
      </div>
      <div class="comment-content">
        <div class="text">{{commentContent}}</div>
        <div class="photos">
          <img
          v-for="(img,index) in commentImages"
          :key="index"
          v-lazy="img">
        </div>
      </div>
      <div class="comment-reply">
        <div class="comment-replay-item official">
          <div class="text"><div class="avatar"></div><span >官方回复：</span>{{replyContent}}</div>
        </div>
      </div>
      <div class="goComment isline"><p>查看全部{{commentsBad + 1}}条评论</p></div>
    </div>
  </div>
</div>
</template>

<script>
import GoodsCell from '@/components/product/GoodsCell.vue'
export default {
  name: 'goodsComment',
  components: {
    GoodsCell
  },
  props: {
    commentsTotal: {
      default: null
    },
    satisfyPer: {
      default: null
    },
    commentsBad: {
      default: null
    },
    userName: {
      default: null
    },
    userAvatar: {
      default: null
    },
    addTime: {
      default: null
    },
    commentContent: {
      default: null
    },
    commentImages: {
      default: null
    },
    replyContent: {
      default: null
    }
  }
}
</script>

<style scoped>
.comment-view {
  display: flex;
  justify-content: space-between;
  margin: 0 16px;
  padding: 16px 0;
  font-size: 14px;
  position: relative;
}
.comment-view .comment-count,
.comment-view .comment-degree span {
  color: rgba(0,0,0,.54);
}
.isline::after {
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
.comment-view .comment-degree {
  color: #ff6700;
  text-align: right;
  margin-right: 25px;
}
.align-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex {
  flex: 1 1 auto;
}
.box-flex>*, .box-inline-flex>* {
  flex: 1 1 auto;
}
.comment-box {
  background: #fff;
  text-align: left;
}
.comment-box .item {
    padding: 12px 16px 16px;
}
.comment-box .item .comment-header .avatar-img-box {
  margin-right: 12px;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 100%;
}
.comment-box .item .comment-header .avatar-img-box img {
  width: 100%;
}
.comment-box .item .comment-header .name {
  font-size: 13px;
}
.comment-box .item .comment-header .comment-date {
  margin-top: 2.5px;
  color: rgba(0,0,0,.54);
  font-size: 11px;
}
.comment-box .item .comment-header .like {
  padding-left: 25px;
  background: transparent url(../../assets/images/comment-like.png) no-repeat 0;
  background-size: auto 100%;
  width: 52px;
  height: 18px;
  line-height: 18px;
  color: #ff6700;
  font-size: 11px;
}
.comment-box .item .comment-content .text {
  padding: 8px 0;
  line-height: 20px;
  font-size: 13px;
}
.comment-box .item .comment-content .photos {
  margin-bottom: 6px;
}
.comment-box .item .comment-content .photos img {
  width: 83px;
  height: 83px;
  display: inline-block;
  margin: 0 4px 4px 0;
}
.comment-box .item .comment-reply {
  padding: 8px;
  background: #f6f6f6;
  padding-bottom: 12px;
}
.comment-box .item .comment-reply .comment-replay-item {
  overflow: hidden;
  padding: 2.5px 0;
}
.comment-box .item .comment-reply .comment-replay-item .text {
  font-size: 12px;
  line-height: 20px;
}
.comment-box .item .comment-reply .comment-replay-item.official .avatar {
  background: transparent url(../../assets/images/milogo.png) no-repeat 50%;
  background-size: cover;
}
.comment-box .item .comment-reply .comment-replay-item .avatar {
  float: left;
  width: 16px;
  height: 16px;
  overflow: hidden;
  border-radius: 100%;
  margin-right: 10px;
}
.comment-box .item .comment-reply .comment-replay-item.official span {
  color: #ff6700;
}
.goComment {
  font-size: 16px;
  text-align: center;
  color: #ff6700;
  position: relative;
  background: #f6f6f6;
}
.goComment p {
  margin: 0 10px;
  padding: 16px 0;
  border-top: 1px solid #c9c9c9;
}
</style>
