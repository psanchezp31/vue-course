import {owners} from '../data/heroes'
import superHeroes from '../data/heroes'  //el nombre superHeroes es inventado, ya que al ser exportado default , se puede hacer esto

// console.log(owners);

// const [ dc, marvel ] = owners

// console.log(dc);
// console.log(marvel);

// console.log(superHeroes);


//Ejercicio: getHeroById(id)

export const getHeroeById = (id) =>{
    return superHeroes.find(h => h.id ===id)
}

const {name} = getHeroeById(1);

console.log(name);

//Ejercicio: getHeroByOwner(owner)
export function getHeroByOwner(owner){
    return superHeroes.filter(h => h.owner === owner)
}

const [name1, name2] = getHeroByOwner('Marvel')

console.log(name1.name, name2.name);


//IMPORTANDO EN OTRO ARCHIVO

// import { getHeroeById, getHeroByOwner } from "./bases/import-export";

// const {name} = getHeroeById(1);

// console.log(name);

// const [name1, name2] = getHeroByOwner('Marvel')

// console.log(name1.name, name2.name);

