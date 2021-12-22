<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>Quien es este pokémon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />

    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>
  </div>
</template>

<script>
import PokemonOptions from "../components/PokemonOptions";
import PokemonPicture from "../components/PokemonPicture";
import getPokemonOptions from "@/helpers/getPokemonOptions";

//console.log(getPokemonOptions());

export default {
  name: "App",
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      const randomInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[randomInt];
    },
    checkAnswer(pokemonId) {
      this.showAnswer = true;
      if (pokemonId === this.pokemon.id) {
        this.message = `Es ${this.pokemon.name}!`;
        this.showPokemon = true;
      } else {
        this.message = `Oops!, era ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null
      this.mixPokemonArray();
    },
  },
  mounted() {
    //lifecycle hooks: El mounted es un método que se ejecuta, una vez el componente se renderiza, se ejecuta una sola vez
    this.mixPokemonArray();
  },
};
</script>
