const person = {
  name: "Tony",
  age: 45,
  codeName: "Ironman",
};

// const {name, age, codeName, power='No tiene poder'} = person

// console.log(age);
// console.log(power)

const createHero = ({ name:nombre, age, codeName }) => ({  //name:nombre - RENOMBRE DE VARIABLES
  //desestructuración, se pasan las variables como parámetros y el objeto person como argumento

  id: 12232, //return implícito, se le quita el RETURN y se le coloca los parentesis
  nombre,
  age,
  codeName,
});

console.log(createHero(person));
