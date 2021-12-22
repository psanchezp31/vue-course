<template>

  <Indecision/>    <!-- con :start se bindea el tipo de dato (Number) con el "100" que se está pasando, Para que lo tome como numero no como string-->

</template>

<script>
import Indecision from './components/Indecision.vue'
//import Counter from './components/Counter.vue'
export default {
  name: 'App',
  components:{
    Indecision
  }
  
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
