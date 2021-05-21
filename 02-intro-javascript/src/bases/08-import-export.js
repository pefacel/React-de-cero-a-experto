import { heroes}  from '../data/heroes'



// find entrega el primero
export const getHeroeById = (id) => heroes.find(h => h.id === id);

// console.log(getHeroeById(2));

// filter entrega todas las coincidencias
export const getHeroeByOwner = ( owner ) => heroes.filter(h => h.owner === owner);

// console.log(getHeroeByOwner('DC'));

