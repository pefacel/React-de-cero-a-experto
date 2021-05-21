// const arreglo = new Array();

// arreglo.push('hola')
// arreglo.push(5)
// arreglo.push(true)


const arreglo = [1,2,3,4,5]

let arreglo2 = [...arreglo , 6];

const arreglo3 = arreglo2.map(n=> n*9);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);