
const saludar = function(nombre) {

    return 'hola ' + nombre;
}

console.log(saludar('1 Rikishi'));


const saludar2 = n =>{
    return 'hola ' + n;
}

console.log(saludar2('2 Rikishi'));


const saludar3 = n =>'hola ' + n;


console.log(saludar3('3 Rikishi'));

const saludar4 = () => 'hola ';

console.log(saludar4());


const getUser = () =>({
     
        uid: 'abc45665',
        username: 'Shawn_Michaels233'
    
});

console.log(getUser());

const getUsuarioActivo = nombre =>({
    uid: 'uihy654',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Viscera');
console.table(usuarioActivo);

const getUsuarioActivo2 = nombre =>
    `uid: 'uihy654',
username: ${nombre}` ;
;
const usuarioActivo2 = getUsuarioActivo2('Viscera');

console.log(usuarioActivo2);

