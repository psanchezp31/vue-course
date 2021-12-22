<template>
  <h2>{{ customTitle }}</h2>
  <p data-testid="counter">{{counter}}</p> /<!--El data-testid es un data attribute para hacer la prueba, ya que por id y clases puede ser volátil (se pueden eliminar y la prueba fallará)-->
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

  <div class="buttons-container">
    <button data-testid="increaseBtn" @click="this.increase">+1</button>
    <button data-testid="decreaseBtn" @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      //required:true,
      default: 100,
      validator(value) {
        return value >= 0;
      },
    },
  },
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquareValue() {
      return this.counter * this.counter;
    },
    increase() {
      console.log("entering increase");
      this.counter = this.counter + 1;
    },
    decrease() {
      console.log("entering decrease");
      this.counter = this.counter - 1;
    },
  },
  computed: {
    //las prop computed tienen que tener RETURN
    //las propiedades computadas se guardan en el caché, es decir que se evita utilizar mucha memoria
    squareCounter() {
      return this.counter * this.counter;
    },
    customTitle() {
      return this.title || "Counter";
    },
  },
};
</script>

<style>
button {
  background-color: #64bb87;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>
