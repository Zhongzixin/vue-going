<template>
  <div>
    <div class="goods-list">
      <!-- 商品列表区域 -->
      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              v-model="$store.getters.getSelected[item.id]"
              @change="selectChange(item.id,$store.getters.getSelected[item.id])"
            ></mt-switch>
            <img :src="item.thumb_path" alt />
            <div class="info">
              <h1>{{item.title}}</h1>

              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 结算区域 -->

      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="left">
              <p>总计（不含运费）</p>
              <p>
                已勾选商品
                <span class="red">{{$store.getters.getGoodsCountAndMoney.count}}</span>件，总价
                <span class="red">￥{{$store.getters.getGoodsCountAndMoney.money}}</span>
              </p>
            </div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
    <p>{{$store.getters.getSelected}}</p>
  </div>
</template>
    
<script>
import numbox from "../subcomponents/shopcar_numberbox.vue";
export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      if (idArr.length <= 0) {
        return;
      }
      this.$http
        .get("api/goods/getshopcarlist/" + idArr.join(","))
        .then(result => {
          if (result.body.status === 0) {
            this.goodslist = result.body.message;
          }
        });
    },
    remove(id, index) {
      this.goodslist.splice(index, 1);
      this.$store.commit("removeFromCar", id);
    },
    selectChange(id, val) {
    //   console.log(id + "---" + val);
    this.$store.commit("selectedChanged",{id,selected:val})
    }
  },
  components: {
    numbox
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  background-color: #ccc;
  overflow: hidden;
  .mui-card-content-inner {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
    }

    .info {
      h1 {
        font-size: 13px;
        padding-bottom: 12px;
      }
      .price {
        color: red;
        font-weight: bold;
        font-size: 13px;
      }
    }
  }
}

.mui-card-content-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .red {
    color: red;
    font-weight: bold;
    font-size: 16px;
  }
}
</style>