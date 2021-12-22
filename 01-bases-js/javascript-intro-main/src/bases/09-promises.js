import { getHeroeById } from "./bases/import-export";
// console.log("inicio");

// new Promise((resolve, reject) => {
//   console.log("cuerpo de la promesa");
//   resolve("Promesa resuelta");
// })
//   .then(console.log)   // msg => console.log(msg)- Se puede simplificar así, ya que el primer argumento se le pasa implicitamente al callback o (console log)
//   .catch(console.log);

// console.log("fin");

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroeById(id);

      if(hero){
        resolve(hero);
      }else{
          reject("Heroe does not exist")
      }
      
    }, 1000);
  });
};

getHeroeByIdAsync(3).then((h) => console.log(`El heroe es ${h.name}`)). catch(console.log);
