<template>
  <div class="container-grid">
      <div v-for="category in categories" :key="category.slug" class="">
           <div class="titleCateg">{{category.name}}</div>
           <router-link :to="{name:'single-category',params:{slug: category.slug}}">Visualizza Categoria</router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:"Categories",
    data(){
        return{
            categories:[]
        }
    },
    created(){
        axios
        .get("/api/categories")
        .then((response)=>{
            this.categories=response.data;
        })
    }
}
</script>

<style>

</style>