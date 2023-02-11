function bienvenida() {

    alert ('Tu mejor opcion en prestamos en un solo lugar')
let usuario = prompt('ingrese su nombre ')

if (usuario !='administrador') {
    alert ('bienvenido ' + usuario)
}
}

function simulador() {

let banco = prompt ('Ingrese su banco, Santander, Galicia o Provincia').toLowerCase ()
 switch(banco) {
    case 'santander' :
        interes1 = 1.15
        alert ('Interes 15%')
    prestamo = prompt ('simula su prestamo \n "1": 5000 \n "2": 10000 \n "3":15000')
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
let opcion = prompt ('Para continuar elija una opcion \n "1": Elegir un banco n\ "2" : Finalizar')
while (opcion !="2") {
    if (opcion ==="1"){
        simulador ();
    } else if (opcion ==="2"){
        alert ("gracias por su visita")
    }
}
}

bienvenida ();
simulador ();
finalizar ();