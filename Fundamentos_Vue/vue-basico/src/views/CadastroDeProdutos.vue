<template>
  <div class="produtos">
    <h1>{{ mensagem }}</h1>
  </div>
</template>
<script>
export default{
  name : 'CadastroDeProdutos',
  data(){
    return{
      mensagem : 'This is an product page'
    }
  }
}
</script>
<style scoped>
  h1  {
    color: red;
  }
</style>