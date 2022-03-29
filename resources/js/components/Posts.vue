<template>
  <div class="containerr">
        <div class="row justify-content-around flex-wrap p-relative">
            <div v-for="post in posts" :key="post.slug" class="col-4 gxy-3 text-center mb-4">
                <div class="my_height">
                    <h1 class="mt-5 mb-4">{{post.title}}</h1>
                    <div v-if="post.category">{{post.category.name}}</div>
                    <div class="col-12 mt-5 mb-5">
                        <img class="w-100 product_img" :src="post.img" alt="">
                    </div>
                    <span class="mb-4 tags">
                        <span class="tag" v-for="tag in post.tags" :key="tag.slug">
                            {{tag.name}}
                        </span>
                    </span>
                    <p><strong class="info_smart">ingredients:</strong> {{post.ingredients}}</p>
                    <ul class="p-0">
                        <strong class="info_smart">Description:</strong> 
                        <li>
                            {{post.content}}
                        </li>
                    </ul>
                    <p><strong class="info_smart">Time Cooking:</strong> {{post.time_cooking}}</p>  
                </div>
                <!--link per la rotta del singolo post-->
                <button class="m-3 button_show pt-2 pb-2 ps-1 pe-1"><router-link :to="{ name: 'single-post', params:{slug: post.slug} }">Visualizza la Ricetta</router-link></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Posts",
    data(){
        return{
            posts:[]
        }
    } ,
    created(){
        axios
        .get("/api/posts")
        .then((apirisp)=>{
            this.posts= apirisp.data;
        })
    }
}

</script>

<style lang='scss' scoped>
.button_show{
    background-image: url('https://media.leroymerlin.it/media/233616/.jpg?width=650&height=650&format=jpg&quality=80&fit=bounds');
    background-size:cover ;
    border-radius: 10px;
    a{
        color: rgb(169, 169, 169);
        font-weight: 900;
    }
}
</style>