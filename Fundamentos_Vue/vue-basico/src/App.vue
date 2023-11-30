<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">About</router-link> |
      <router-link to="/login">Home</router-link>
    </nav> -->
    <Menu></Menu>
    <router-view/>
  </div>
</template>
<script>
import Menu from '@/components/menu/Menu.vue'
export default {
  components:{
    Menu
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  :root{
    --cor-primaria:#FF3D00;
    --cor-secundaria: #ff8f6d;
  }
  body{
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
  }
</style>
