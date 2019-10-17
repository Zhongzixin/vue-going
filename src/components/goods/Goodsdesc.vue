<template>
    <div class="desc-container">
        <h3>{{desclist.title}}</h3>
        <hr>
        <div class="content" v-html="desclist.content">
            
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            desclist:{}
        }
    },
    created(){
        this.getdesc();
    },
    methods:{
        getdesc(){
            this.$http.get('api/goods/getdesc/'+this.$route.params.id).then(result => {
                if(result.body.status === 0){
                    this.desclist = result.body.message[0]
                }
            })
        }
    }
}
</script>

<style lang="scss">
.desc-container {
    padding: 4px;
    h3 {
        font-size: 16px;
        text-align: center;
        color: #226aff;
        margin: 15px 0;
    }
    img {
        width: 100%;
    }
}

</style>