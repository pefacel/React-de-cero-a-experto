// Desestructuración
// Asignación destructurante

const luchador = {
    nombre: 'Goldust',
    edad: 52,
    clave: 'Sheltered Dreams',
    rango: 'meh',
    royalrumble: {
        win: 5,
        lose:3
    }
}

const estrella = {
    nombre: 'Dustin',
    edad: 45,
    clave: 'Sheltered Dreams',
    rango: 'meh',
    royalrumble: {
        win: 5,
        lose:3
    }
}
// const {nombre, edad, clave} = persona;

// console.log(nombre);

// const unContext = ({nombre, edad,clave, rango='Luchador, "Estrella" de Cine'}) => ({
//         nombreClave: clave,
//         anios: edad  
// });

// const luchador = unContext( persona );


const {edad, nombre, royalrumble:{win, lose}} = luchador;

console.table(edad, nombre, win, lose);



const unContext = ({nombre, edad}) => ({
        nombreReal: nombre,
        anios: edad  
 });

 const luchador2 = unContext(luchador);
 const {nombreReal, anios} = luchador2;
 console.log('luchador ' + nombreReal + ' ' + anios)

const estrella2 = unContext(estrella);
const {nombreReal:nombreEstrella, anios:aniosEstrella} = estrella2;
console.table(nombreEstrella, aniosEstrella)