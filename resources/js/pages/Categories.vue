<template>
  <div class="container my_margin text-center mt-5 pt-5">
      <div v-for="category in categories" :key="category.slug" class="d-flex flex-column align-items-center mt-3">
           <div class="titleCateg tit-wid">{{category.name}}</div>
           <button class="m-3 button_show pt-2 pb-2 ps-1 pe-1"><router-link :to="{name:'single-category',params:{slug: category.slug}}">Visualizza Categoria</router-link></button>
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

<style lang="scss" scoped>
.tit-wid{
    color: white;
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;   
}


</style>