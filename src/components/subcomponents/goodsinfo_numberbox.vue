<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
      @change="changecount"
      ref="count"
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
    changecount() {
      // console.log(this.$refs.count.value);
      this.$emit("getcount", parseInt(this.$refs.count.value));
    }
  },
  watch: {
    max: function(newVal, oldVal) {
      mui(".mui-numbox")
        .numbox()
        .setOption('max', newVal);
    }
  },
  props: ["max"]
};
</script>

<style lang="scss" scoped>
</style>