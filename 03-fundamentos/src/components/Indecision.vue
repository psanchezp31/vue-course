<template>
  <h1>Indecision</h1>
  <img v-if="image" :src="image" alt="bg" />
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input
      v-model="question"
      @keypress="saveInput"
      type="text"
      placeholder="Ask me a question"
    />
    <p>Remember to ends it with a question mark (?)</p>

    <div v-if="isValidQuestion">
      <h2>
        {{ question }}
      </h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: null,
      answer: null,
      image: null,
      isValidQuestion: false,
    };
  },
  watch: {
    question(value, oldValue) {
      this.isValidQuestion = false;

      console.log({ value });

      if (!value.includes("?")) return;
      this.isValidQuestion = true;
      this.getAnswer();
    },
  },
  methods: {
    async getAnswer() {
      try {
        this.answer = "Pensando...";

        const { answer, image } = await fetch(
          "https://yesno.wtf/api"
        ).then((response) => response.json());

        console.log(answer, image);

        this.answer = answer === "yes" ? "Si!" : "No!";

        this.image = image;

      } catch (error) {
        console.log("IndecisionComponent:", error);
        this.answer = "No se pudo cargar del API";
        this.image = null;
      }
    },
  },
};
</script>

<style scoped>
/*SCOPED hace que el css solo sea aplicado a este componente */
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>
