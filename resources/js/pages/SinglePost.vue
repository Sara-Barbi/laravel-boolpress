<template>
    <div class="container text-center mt-5 pt-5">
        <div class="row justify-content-center">
            <div class="col-10 back_show ">
                <h1 class="mt-5 mb-4">{{post.title}}</h1>
                <div v-if="post.category">{{post.category.name}}</div>
                <div class="d-flex justify-content-center mt-5 mb-5">
                    <img class="col-9" :src="post.img" alt="">
                </div>
                <span class="mb-4 tags" v-if="post.tags">
                    <span class="tag" v-for="(tag,index) in post.tags" :key="index">
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
        </div>
    </div>
</template>

<script>
export default {
    name:"SinglePost",
    data(){
        return{
            post:{},               //deve ritornare un oggetto
        }
    } ,
    created(){
        axios                                              //la chiamata axios avviene per verificare lo slug del singolo elemento
        .get(`/api/posts/${this.$route.params.slug}`)    //il collegamento lo vediamo da ispeziona nel browser   this senza$
        .then((apirisp)=>{
            this.post= apirisp.data;
        })
    }
}

</script>

<style>

</style>