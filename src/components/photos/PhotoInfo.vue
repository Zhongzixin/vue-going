<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 12:08:03
 * @LastEditTime: 2019-10-09 12:08:03
 * @LastEditors: your name
 -->
<template>
  <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoinfo.add_time | dataFormat}}</span>
      <span>点击：{{photoinfo.click}}次</span>
    </p>
    <hr />
    <!-- 缩略图 -->
    <!-- <div class="thums">
      <img
        class="preview-img"
        v-for="(item, index) in list"
        :src="item.src"
        height="100"
        @click="$preview.open(index, list)"
        :key="item.src"
      />
    </div>-->
    <div class="thumbs">
      <vue-preview :slides="list" @close="handleClose" class="img"></vue-preview>
    </div>

    <div class="content" v-html="photoinfo.content"></div>

    <cmt-box :id="id"></cmt-box>
  </div>
</template>


<script>
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: [],
      list: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThums();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
          // console.log(this.id);
        }
      });
    },
    getThums() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
            item.msrc = item.src;
          });
          this.list = result.body.message;
        }
      });
    },
    handleClose(){
      console.log('close event');
    }
  },
  components: {
    "cmt-box": comment
  }
};
</script>


<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
  .thumbs {
  /deep/ .my-gallery {
    display: flex;
    flex-wrap: wrap;
    figure {
      width: 30%;
      margin: 5px;
      img {
        width: 100%;
      }
    }
  }
}

}
</style>

