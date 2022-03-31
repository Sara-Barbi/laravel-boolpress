<template>
  <div class="container-grid my_margin text-center">
        <h1 class="titleCateg">{{category.name}}</h1>
        <div v-for="post in category.posts" :key="post.slug" class="text-center">
            <h4 class="tit_pos">{{post.title}}</h4>
            <img class="post_preview" :src="post.img" alt="">
            <router-link :to="{name:'single-post',params:{slug: post.slug}}"> <button class="m-3 button_show pt-2 pb-2 ps-1 pe-1">Visualizza Post</button></router-link>
        </div>
  </div>
</template>

<script>
export default {
    name:"SingleCategory",
    data(){
        return{
            category:{},
        }
    },
    created(){
        axios
        .get(`/api/categories/${this.$route.params.slug}`)
        .then((response)=>{
            this.category = response.data;
        }).catch((error)=>{
           // this.$router.push({name:'page-404'})
           error;
        })
    }
}
</script>

<style lang="scss" >
.post_preview{
    width:150px;
}
.titleCateg{
    color: rgb(223, 143, 212);
    background-color: rgba(0, 0, 0, 0.571);
    font-weight: 900;
}
.my_margin{
    margin-top: 60px;
}
.tit_pos{
    color: white;
}

</style>