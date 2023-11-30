<template>
  <div class="dashboard">
    <h1>{{ mensagem }}</h1>
  </div>
</template>
<script>
export default{
  name : 'DashbordAplicacao',
  data(){
    return{
      mensagem : 'This is an dashboard page'
    }
  }
}
</script>
<style scoped>
  h1  {
    color: red;
  }
</style>