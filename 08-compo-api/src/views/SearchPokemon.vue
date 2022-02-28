<template>
  <h1>Buscar Pokemon:{{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input
      type="Number"
      placeholder="Número del pokemon"
      v-model="pokemonId"
      ref="txtSearchId"
    />
  </form>
  <br />
  <span>Presione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from "vue";
import { useRouter } from "vue-router"; //se debe importar el useRouter para tener el objeto router (para poder hacer push a rutas y demas o sea navegación)
export default {
  // la data no se va a usar si trabajamos con el COMPOSITION API
  setup() {
    // acá no se tiene acceso al this
    // console.log(this) // SALE UNDEFINED, PORQUE NO TIENE EL SCOPE
    const router = useRouter();
    const pokemonId = ref(1);
    const txtSearchId = ref();

    onActivated(() => {
      //se usa en onActivated en vez del onMounted porque como estamos usando el keep-alive en el router, el componente nunca se desmonta amenos que se refresque la pagina
      // txtSearchId.value.focus()
      txtSearchId.value.select();
    });
    return {
      pokemonId,
      txtSearchId,
      onSubmit: () => {
        console.log("pokemon a buscar: " + pokemonId.value);
        router.push({ name: "pokemon-id", params: { id: pokemonId.value } });
      },
    };
  },
};
</script>
