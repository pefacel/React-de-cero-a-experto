import { getHeroeById } from "./bases/08-import-export";

/*
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const p1 = getHeroeById(2);
        resolve(p1);
        // reject('No se pudo encontrar al heroe');
    }, 2000)
});

promesa.then( (heroe) =>{
    console.log('heroe: ', heroe)

}).catch(err => console.warn(err)); 
*/


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroePromesa = getHeroeById(id);

            if(heroePromesa != null)
            resolve(heroePromesa)

            else
            reject('No se pudo encontrar al heroe');

            
        }, 2000)
    });
};

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn);