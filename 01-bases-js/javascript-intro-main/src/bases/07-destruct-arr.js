const characters = ["Goku", "Vegueta", "Trunks"];

const [g, , t, goten ="No tiene valor"] = characters; // con espacios vacios se pueden tomar solo las variables que nos interesan

console.log(g, t);


const returnArray = () =>{
    return ['ABC', 123]
}

const [letters, numbers] = returnArray()

console.log(letters,numbers);

//OTRA FORMA DE DESESTRUCTURACIÓN
const arrayExample = ([letters, numbers]) => {
    return [letters,numbers]
}

const [l,n] = arrayExample(['XYZ', 789])

console.log(l, n);