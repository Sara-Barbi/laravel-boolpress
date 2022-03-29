<template>
  <div class="my_mt text-center">
    <h1 class="m-3">HOME</h1>
    <Posts/>
  </div>
</template>

<script>
import Posts from '../components/Posts.vue';

export default {
  name:'Home',
 components:{
        Posts
    }
}
</script>

<style lang='scss' scoped>
h1{
    color: white;
}
.my_mt{
  margin-top: 60px;
  padding-top:20px;
}

</style>