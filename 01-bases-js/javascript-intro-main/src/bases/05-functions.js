const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
  },
];

const existe = heroes.some(function (heroe) {
  return heroe.id === 1;
});

const existe2 = heroes.some( (heroe) =>  heroe.id === 1 );

const { name, id } = heroes.find( (heroe) =>  heroe.id === 1 ); //destructuración




console.log(existe);
console.log(existe2);
console.log(name);
console.log(id);