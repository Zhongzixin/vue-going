<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <!-- 在组件中使用v-for一定要使用key -->
      <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" alt="">
      </mt-swipe-item> -->
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
 
    </mt-swipe>
    <!-- 九宫格改造六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1(1).png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
      
      
    </ul>
  </div>
</template>
    
<script>
import {Toast} from 'mint-ui'

export default {
  data() {
    return {
      lunbotuList:[]
    };
  },
  // created() {
  //   this.getLunbotu();
  // },
  methods: {
    // getLunbotu() {
    //   //获取数据
    //   this.$http
    //     .get("")//http://www.liulongbin.top:3005/api/getlunbo
    //     .then(result => {
    //       if(result.body.status === 0){
    //         this.lunbotuList = result.body.message;
    //         // console.log(result.body.message);
    //       }else {
    //         Toast('加载轮播图失败...')
    //       }
    //     });
    // }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: hotpink;
    }
    &:nth-child(2) {
      background-color: purple;
    }
    &:nth-child(3) {
      background-color: deepskyblue;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  border: 0;
  background-color: #fff;
  img {
    width: 60px;
    height: 60px;
  }
}
</style>