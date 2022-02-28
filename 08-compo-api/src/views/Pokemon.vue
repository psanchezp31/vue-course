<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <br />
    <router-link :to="{ name: 'pokemon-search' }">Regresar</router-link>
  </template>
</template>

<script>
import { watch } from "vue";
import usePokemon from "@/composables/usePokemon";
import { useRoute, onBeforeRouteLeave } from "vue-router"; //el useRoute es para la ruta
export default {
  setup() {
    const route = useRoute();
    const { errorMessage, isLoading, pokemon, searchPokemon } = usePokemon(
      route.params.id
    );

    watch(
      () => route.params.id,  //el watch recibe primero a que propiedad quiere escuchar o watchear
      () => searchPokemon(route.params.id) //luego lo que se quiere hacer cuando esa prop cambie
    );

    onBeforeRouteLeave(()=>{ //es un hook del ciclo de vida del router
      const answer =  window.confirm('¿Está seguro que desea salir?')
      if(!answer) return false //false, bloquea la salida
    })

    return {
      errorMessage,
      isLoading,
      pokemon,
    };
  },
};
</script>

<style></style>
