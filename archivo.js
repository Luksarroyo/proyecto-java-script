function bienvenida() {

    alert ('Tu mejor opcion en prestamos en un solo lugar')
let usuario = prompt('ingrese su usuario ')

if (usuario != 'administrador') {
    alert ('bienvenido ' + usuario)
}
}

function simulador() {
let banco = prompt ('Ingrese su banco, Santander, Galicia o Provincia') .toLowerCase ()
 switch(banco) {
    case 'santander' :
        interes1 = 1.15
        alert ('Interes 15%')
    prestamo = prompt ('simular su prestamo \n "1": 5000 \n "2": 10000 \n "3":15000')
        if (prestamo === "1") {
         alert ('Tiene que devolver: ' + 5750)
        } else if (prestamo === "2") {
         alert ('Tiene que devolver: ' + 11500)
        } if (prestamo === "3") {
         alert ('Tiene que devolver: ' + 17250)
        }
        break

    case 'galicia' :
        interes2 = 1.20
        alert ('Interes 20%')
        prestamo = prompt ('simula su prestamo \n "1": 5000 \n "2": 10000 \n "3":15000')
            if (prestamo === "1") {
             alert ('Tiene que devolver: ' + 6000)
            } else if (prestamo === "2") {
             alert ('Tiene que devolver: ' + 12000)
            } if (prestamo === "3") {
             alert ('Tiene que devolver: ' + 18000)
            } 
        break

    case 'provincia' :
        interes3 = 1.23
        alert ('Interes 23%')
        prestamo = prompt ('simula su prestamo \n "1": 5000 \n "2": 10000 \n "3":15000')
            if (prestamo === "1") {
             alert ('Tiene que devolver: ' + 6150)
            } else if (prestamo === "2") {
             alert ('Tiene que devolver: ' + 12300)
            } if (prestamo === "3") {
             alert ('Tiene que devolver: ' + 18450)
            } 
        break
    default:
        alert('No encontramos ese banco')
 }
} 

function finalizar () {
let opcion = prompt ('Para continuar elija una opcion \n "1": Elegir un banco n\ "2" : Pedir Prestamo \n "3" : Finalizar')
while (opcion !="2") {
    if (opcion ==="1"){
        simulador ();
    } if (opcion ==="2"){
        prestamo (); 
    } else if (opcion ==="3"){
        alert ("gracias por su visita")
    }
}
}

bienvenida ();
simulador ();
finalizar ();

class datosUsuarios  {
    constructor (nombre, contrasenia, edad, banco){
    this.nombre = nombre
    this.contrasenia = contrasenia
    this.edad = edad
    this.banco = banco
    }

}

const usuario1= new datosUsuarios ('Lucas','1234', 18, 'santander')
const usuario2 = new datosUsuarios ('Pedro', '4567', 35, 'galicia')
const usuario3 = new datosUsuarios ('Natalia', '8912', 56, 'provincia')
const usuario4= new datosUsuarios ('Ruben','12346', 29, 'santander')
const usuario5 = new datosUsuarios ('Paola', '456712', 47, 'galicia')
const usuario6 = new datosUsuarios ('Lionel', '891278', 26, 'provincia')

console.log (usuario1)
console.log (usuario2)
console.log (usuario3)
console.log (usuario4)
console.log (usuario5)
console.log (usuario6)

let prestamos = [
    {nombre :'Lucas', renta: 1.5, dinero: 5000},
    {nombre :'Pedro', renta: 1.2, dinero: 50000},
    {nombre :'Natalia', renta: 1.23, dinero: 8000},
    {nombre :'Ruben', renta: 1.5, dinero: 3000},
    {nombre :'Paola', renta: 1.2, dinero: 45000},
    {nombre :'Lionel', renta: 1.23, dinero: 9000}  
]

let devoluciones = 0
let valorCuota = 12

for (let i= 0; i< prestamos.length; i++) {
    let prestamo = prestamos[i]
    console.log (prestamo)
    let devoluciones= prestamo.renta * prestamo.dinero
    console.log ('El dinero a devolver seria igual a  $' + devoluciones)
    let valorCuota= devoluciones / 12
    console.log ('El valor de la cuota en 12 meses seria de  $' + valorCuota)
}

