<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2>Produtos</h2>
        <hr>
        <div class="row">
          <div class="col-sm-2">
            <Button value="Adicionar"></Button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <table class="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Valor</th>
              <th>Data de cadastro</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import Button from '@/components/buton/Button.vue'
export default {
  name: 'ControleDeProdutos',
  components: {
    Button
  },
  data() {
    return {
      mensagem: 'This is an product page'
    }
  }
}
</script>
<style scoped>
h1 {
  color: red;
}
</style>