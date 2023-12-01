<template>
  <div class="clientes">
    <h1>{{ mensagem }}</h1>
  </div>
</template>
<script>
export default{
  name : 'ControleDeClientes',
  data(){
    return{
      mensagem : 'This is an client page'
    }
  }
}
</script>
<style scoped>
  h1  {
    color: red;
  }
</style>