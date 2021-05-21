const persona = {
nombre: 'Vince',
apellido: 'McMahon',
edad: 74,
};

console.table( persona );

// Operador Spread clona el objeto

const persona3 ={...persona};

console.table( persona3 );

persona3.nombre='Stephanie';

console.table( persona3 );

// Hace cambios a la referencia en memoria y no lo clona

const persona2 = persona;

persona2.nombre='Shane';

console.table( persona );

console.table( persona2 );

persona2.nombre='Shane';

