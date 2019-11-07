<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 22:20:29
 * @LastEditTime: 2019-10-15 18:21:33
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="goods-container">
    <!-- 小球模型 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballflag" ref="ball"></div>
    </transition>

    <!-- 商品轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <mt-swipe :auto="4000">
          <!-- 在组件中使用v-for一定要使用key -->
          <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" alt="">
          </mt-swipe-item>-->
          <mt-swipe-item></mt-swipe-item>
          <mt-swipe-item></mt-swipe-item>
          <mt-swipe-item></mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：
            <span class="now">￥{{goodsinfo.sell_price}}</span>
          </p>
          <p>
            购买数量：
            <numberbox @getcount="getSelectCount" :max="goodsinfo.stock_quantity"></numberbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopcar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.goods_no}}</p>
          <p>库存情况：{{goodsinfo.stock_quantity}}件</p>
          <p>上架时间：{{goodsinfo.add_time | dataFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goodsdesc(goodsinfo.id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goodscomments(goodsinfo.id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>


<script>
import numberbox from "../subcomponents/goodsinfo_numberbox.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      goodsinfo: [],
      ballflag: false,
      selectcount : 1,

    };
  },
  created() {
    this.getGoodsInfo();
  },
  methods: {
    getGoodsInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodsinfo = result.body.message[0];
        }
      });
    },
    goodsdesc(id) {
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    goodscomments(id) {
      this.$router.push({ name: "goodscomments", params: { id } });
    },
    addToShopcar() {
      this.ballflag = !this.ballflag;
      var goodsinfo = {
        id:this.id,
        count:this.selectcount,
        price:this.goodsinfo.sell_price,
        selected:true
      };
      this.$store.commit('addToCar',goodsinfo)
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document.getElementById("badge").getBoundingClientRect();
      // console.log(badgePosition);
      const yDist = badgePosition.top - ballPosition.top;
      const xDist = badgePosition.left - ballPosition.left;


      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      // el.style.transform = 'translate(78px,430px)';
      el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.67)";
      done();
    },
    afterEnter(el) {
      this.ballflag = !this.ballflag;
    },
    getSelectCount(count){
      this.selectcount = count;
      console.log('父组件拿到的数量为'+this.selectcount);
    }
  },
  components: {
    numberbox
  }
};
</script>


<style lang="scss" scoped>
.goods-container {
  background-color: #eee;
  overflow: hidden;
  .ball {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    left: 150px;
    top: 359px;
    // transform: translate(78px,430px);
  }
  .now {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
}
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