const personajes = ['Kane', 'Undertaker', 'Stone Cold'];

const [,,ty] = personajes;

// console.log(ty);

const retornaArreglo =() => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();

// console.log(letras, numeros);

const lstate = (valor) => {
    return [valor, () => {console.log('hola mundo')}]
};

const arr = lstate('3minutes');

const [nombre,setNombre] = arr;

console.log(nombre);
setNombre();



