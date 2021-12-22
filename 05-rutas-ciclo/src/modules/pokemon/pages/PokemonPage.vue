<template>
  <div>
    <h1>
      Pokemon: <span>#{{ id }}</span>
    </h1>
    <div v-if="pokemon">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <div>{{ pokemon.name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pokemon: null,
    };
  },
  created() {
    // console.log(this.$route); // con el $route se obtiene segmentos de información de la ruta de navegación,
    // con los query parameters y todo
    // const { id } = this.$route.params;
    // this.id = id
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then((response) => response.json());
        // console.log(pokemon);
        this.pokemon = pokemon;
      } catch (error) {
        this.$router.push("/"); //el metodo push del router, para hacer redireccionamientos
        console.log("no hay nada que hacer aquí");
      }
    },
  },
  watch: {
    id() {
      this.getPokemon();
    },
  },
};
</script>
