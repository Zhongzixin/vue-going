<template>
  <div class="newsinfo">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="suntitle">
      <span>{{newsinfo.add_time | dataFormat}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>

    <hr />
    <div class="content" v-html="newsinfo.content"></div>
    <component-box :id="id"></component-box>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      // console.log(this.id);
      this.$http.get("api/getnew/" + this.id).then(result => {
        if (result.body.status === 0) {
          // console.log(this.id);
          this.newsinfo = result.body.message[0];
        } else {
          Toast("加载失败...");
        }
      });
    }
  },
  components: {
    "component-box": comment
  }
};
</script>

<style lang="scss" scoped>
.newsinfo {
  padding: 0 4px;
  .title {
    color: red;
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
  }
  .suntitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>