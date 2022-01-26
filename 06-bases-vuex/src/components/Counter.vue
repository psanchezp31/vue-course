<template>
  <h1>Counter-Vuex</h1>
  <h2>Direct access:{{ $store.state.count }}</h2>
  <h2>Computed:{{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">Random</button>

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    countComputed() {
      return this.$store.state.count; //acceder al store mediante prop computada
    },

    //DOS FORMAS DE LLAMAR UNA PROP DEL STATE
    ...mapState(["count", "lastMutation", "isLoading"]), //destructuracion para llamar la prop que quiero no mas

    // ...mapState({
    //     count: state => state.count
    // })
  },
  methods: {
    increment() {
      this.$store.commit("increment"); //para hacer una mutación
      //del state, se hace un commit, se le pasa el mutation registrado 'increment'
    },
    incrementBy() {
      this.$store.commit("incrementBy", 5); //se le pasa la mutación y el otro argumento
    },
    // incrementRandomInt(){
    //     this.$store.dispatch('incrementRandomInt')
    // }
    ...mapActions(["incrementRandomInt"]), //Esto es lo mismo que lo anterior, hace el dispatch
    // ...mapActions({
    //     randomInt: 'incrementRandomInt'
    // }) Esta forma es para diferenciar el nombre de otro método, para que no se confundan
  },
};
</script>

<style></style>
