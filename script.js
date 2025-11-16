//----------------Ejercicio 1-----------------------------
const articulos =[
    {tipo:"Electrónica",descripcion:"portátil HP", precio:1200},
    {tipo:"Ropa",descripcion:"pantalones vaqueros", precio:40},
    {tipo:"Deporte",descripcion:"pelota de fútbol", precio:30},
    {tipo:"Electrónica",descripcion:"smartphone Xiaomi", precio:550},
    {tipo:"Electrónica",descripcion:"monitor Samsung", precio:350},
    {tipo: "Hogar", descripcion: "vajilla de porcelana", precio: 100},
    {tipo: "Electrónica", descripcion: "ratón inalámbrico", precio: 18},
    {tipo:"Electrónica", descripcion: "tablet Lenovo",precio:200}
];
// 1. Filtrar por tipo y precio máximo
function filtrarArticulos (array,tipo,precioMax) {
    return array.filter(a=>a.tipo === tipo && a.precio <= precioMax);
}

console.log(filtrarArticulos(articulos,"Electrónica",350));

//2. Capitalizar descripciones
function capitalizarDescripciones (array) {
    return array.map(a=> ({
        ...a,
        descripcion:a.descripcion.charAt(0).toUpperCase() + a.descripcion.slice(1).toLowerCase()
    }));

}
console.log(capitalizarDescripciones(articulos));

// 3. Buscar cadena en la descripción
function buscarDescripcion (array, cadena) {
    return array.filter ( a=> a.descripcion.includes(cadena));
}
console.log(buscarDescripcion(articulos,"inalámbrico"));

// 4. Resumen por tipo
function resumenPorTipo(array, tipo) {
    // Declaramos las variables
    let cantidad= 0;
    let suma= 0;
    // Bucle que permite revisar todos los elementos de la lista
    for (let i = 0; i < array.length; i++) {
        //Si el producto es del tipo que queremos, aumenta el contador cantidad y el precio se acumula en suma.
        if(array[i].tipo == tipo ) {
            cantidad++;
            suma += array[i].precio;
        }
    }
    // Si hay 0 articulos el preciomedio es 0, sino se divide la suma entre cantidad de articulos
    let preciomedio = cantidad === 0 ? 0 : suma / cantidad;
    return { cantidad, preciomedio: parseFloat(preciomedio.toFixed(2)) }; 
}
console.log(resumenPorTipo(articulos, "Electrónica"));

// 5. Ordenar por precio
function OrdenarPorPrecio (array, ascendente= true) {
    return [...array].sort((a, b) => ascendente ? a.precio - b.precio : b.precio - a.precio);  
}
console.log(OrdenarPorPrecio(articulos,true)); 
console.log(OrdenarPorPrecio(articulos,false));

//----------------Ejercicio 2-----------------------------

// 6. Crear constructor con parámetro 
class Banco {
constructor(nombre) {
    this.nombre = nombre;
    this.cuentas = {};
}
// 7. Crear cuenta
crearCuenta (codigo, saldo=0) {
    // Si existe la cuenta, muestra un mensaje de error
    if(this.cuentas[codigo]) {
        console.error ('La cuenta ya existe');
        return;
    }
    //El código de la cuenta debe ser entre 1 y 599999, sino esta en ese rango da error
    if(codigo < 1 || codigo > 599999) {
        console.error('Código no válido');
        return;
    }
    // Si todo está bien, crea la cuenta
    this.cuentas[codigo] = saldo;
}
// 8. Actualizar cuenta
actualizarCuenta (codigo, movimiento) {
    // Si no existe la cuenta da error
    if(!this.cuentas[codigo]) {
        console.error('La cuenta no existe');
        return;
    }
    // Suma o resta el movimiento al saldo actual
    this.cuentas[codigo] += movimiento;

}
eliminarCuenta(codigo) {
    // Si no existe la cuenta, da error
    if(!this.cuentas[codigo]) {
    console.error ('La cuenta no existe');
    return;
}
    if(this.cuentas[codigo] !==0) {
        // Si el saldo es diferente de 0, da error
        console.error('Saldo diferente a 0, no se puede eliminar');
        return;
    }
    // Elimina la cuenta del banco
    delete this.cuentas[codigo];
}

listarCuentas() {
 const div = document.getElementById('salida-banco');
div.innerHTML = '<h2>' + this.nombre + '</h2>';
div.innerHTML += '<ul>';
for (let codigo in this.cuentas) {
  div.innerHTML += `<li><b>${codigo} - <span style='color:green'>${this.cuentas[codigo]}</span> €</b></li>`;
}
div.innerHTML += '</ul>';
}
}

const banco1 = new Banco('Banco Mayka'); // Crea el banco y las cuentas
banco1.crearCuenta('11594', 500);     
banco1.crearCuenta('23570', 700);     
banco1.crearCuenta('37859', 0);       
banco1.actualizarCuenta('11594', 50); 
banco1.eliminarCuenta('37859');       
banco1.listarCuentas();   

