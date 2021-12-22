const app = Vue.createApp({
  template: `
    <h1>{{quote}}</h1>
    <blockquote>{{ author  }} </blockquote>   
     
     <button v-on:click="changeQuote">Change quote</button>`,

  data() {
    return {
      quote: "I'm Batman",
      author: "- Bruce Wayne",
    };
  },

  methods: {
    changeQuote(event) {
      console.log("hola mundo", event);
      this.author = '- Paula Sanchez'
      this.capitalize()
    },

    capitalize(){
        this.quote = this.quote.toUpperCase()
    }
  },
});

app.mount("#myApp");
