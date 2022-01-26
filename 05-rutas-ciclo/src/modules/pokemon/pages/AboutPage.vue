<template>
  <div>
    <h1>About Page</h1>
    <h2>{{ name }}</h2>
    <button 
    @click="onChangeName"
    >Cambiar nombre
    </button>
  </div>
</template>

<script>
export default {
  //OPTIONS API
  data() {
    return {
      name: "Paula",
    };
  },
  methods:{
    onChangeName(){
      this.name = 'Estefania'
    }
  },
  beforeCreate() {
    // console.log("beforeCreated");
  },
  created() {
    // console.log("created");
    //acá se pueden hacer peticiones HTTP Para que se renderice en el componente
  },
  beforeMount() {
    // console.log("beforeMount");
  },
  mounted() {
    // console.log("mounted");
  },
  beforeUpdate() {
    // console.log("beforeUpdate");
  },
  updated() {
    // console.log("updated");
  },
  activated() {
    // console.log("activated");
  },
  deactivated() {
    // console.log("deactivated");
  },
  beforeUnmount() {
    // console.log("beforeUnmount");
  },
  unmounted() {
    // console.log("unmounted");
    //aca se pueden limpiar cosas del componente 
  },
  errorCaptured() {
    // console.log("errorCaptured");
  },
  renderTracked() {
    // console.log("renderTracked");
  },
  renderTriggered() {
    // console.log("renderTriggered");
  },
};
</script>

paula estefania
