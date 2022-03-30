<template>
  <div class="container-grid">
        <h1 class="titleCateg">{{category.name}}</h1>
        <div v-for="post in category.posts" :key="post.slug" class="">
            {{post.title}}
            
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

<style>

</style>