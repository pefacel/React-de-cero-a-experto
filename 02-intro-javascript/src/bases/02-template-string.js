const nombre = 'Ric';
const apellido = 'Flair' 

//const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `Hola 
${nombre} 
${apellido}`

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola mundo' + nombre;
}

console.log('Esto es un ' + getSaludo('Big Show'))