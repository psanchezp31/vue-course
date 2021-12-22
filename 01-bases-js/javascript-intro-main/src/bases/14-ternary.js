let firstName;
let lastName = "Sanchez"

console.log(`${firstName || 'No firstName'} ${lastName || 'No lastName'}`);
const isActive = true
const message = isActive ? 'Activo' : 'Inactivo'

console.log(message);