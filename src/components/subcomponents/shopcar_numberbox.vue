<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max" style="height:25px;">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      :value="initcount"
      ref="count"
      @change="countChanged"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>


<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  mounted() {
    //初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChanged() {
    //   console.log(this.$refs.count.value);
      this.$store.commit("updateCar",{
          id:this.goodsid,
          count:this.$refs.count.value
      })
    }
  },
  props: ["max", "initcount","goodsid"]
};
</script>

<style lang="scss" scoped>
</style>