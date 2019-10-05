<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要吐槽的内容（最多吐槽120字）" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in message" :key="item.add_time">
        <div class="cmt-title">第{{ i+1 }}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dataFormat}}</div>
        <div class="cmt-body">{{item.content === 'undefined' ? "此用户很懒，啥都没说" : item.content}}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
    data(){
        return{
            pageindex : 1,
            message:[]
        }
    },
    created(){
        this.getComments()
    },
    methods:{
        getComments(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then(result => {
                if(result.body.status === 0){
                    // console.log(result.body.message);
                    // this.message = result.body.message
                    this.message = this.message.concat(result.body.message)
                }else{
                    Toast('加载失败...')
                }
            })
        },
        getmore(){
            this.pageindex++;
            this.getComments();
        }
    },
    props:["id"]
}
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
}
.cmt-list {
  margin: 5px 0;
  .cmt-item {
    .cmt-title {
      line-height: 30px;
      background-color: #ccc;
    }
    .cmt-body {
      line-height: 35px;
      text-indent: 2em;
    }
  }
}
</style>

