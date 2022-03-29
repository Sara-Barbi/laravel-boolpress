<template>
   <header>
       <nav class="nav d-flex justify-content-center align-items-center  my_nav">
        <a class="nav-link" href="#"><router-link :to="{ name: 'home' }">home</router-link></a>
        <a class="nav-link" href="#"><router-link :to="{ name: 'about' }">about us</router-link></a>
      </nav>
   </header>
</template>

<script>

export default{
    name:"Header",
}
</script>

<style lang="scss" scoped>
.my_nav{
    height: 60px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.571);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    a{
        color: bisque;
        text-decoration: none;
    }
    a:hover{
        color: rgb(238, 149, 149);
    }
}
</style>