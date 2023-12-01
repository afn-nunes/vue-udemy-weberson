<template>
  <div>
    <label :for="id"></label> <br>
    <input :type="type" :placeholder="placeHolder" :id="id">
  </div>
</template>
<script>
  export  default{
    name:"Input",
    props:{
      label:{type: String, require},
      placeHolder:{type: String},
      type: {type: String, default: 'text'},
      id: {type: String, require}
    },
    data(){
      return{
        
      }
    }
  }
</script>
<style scoped>
  input{
    width: 100%;
    padding: 12px, 20px;
    margin: 8px 0px;
    display: inline-block;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
  }
</style>