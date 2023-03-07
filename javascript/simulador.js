
const nombreUsuario = localStorage.getItem('formulario')
console.log(nombreUsuario)

const formulario= JSON.parse(nombreUsuario)
console.log (formulario)

//simulador
const dinero = document.getElementById('dinero')
const cuotas = document.getElementById('cuotas')
const cuota6 = document.getElementById('cuota6')
const cuota12 = document.getElementById('cuota12')
const cuota18 = document.getElementById('cuota6')
const cuota36 = document.getElementById('cuota6')
const boton = document.getElementById('btn')
const alerta = document.getElementById('alerta')

boton.addEventListener('click', () => {
if (dinero.value ==='' || cuotas.value === '') {
    alerta.hidden = false ;
    setTimeout(() => {
        alerta.hidden = true
    }, 2000);
} else {
    console.log(aceptado);
}
})

function calcularMonto (){
   let prestamo = dinero * cuotas
   if (prestamo === cuota6){
    (dinero * 1,5) / 6
   }  if (prestamo === cuota12){
    (dinero * 1,5) / 12
   }  if (prestamo === cuota618){
    (dinero * 3) / 18
   } else (prestamo === cuota36)
    (dinero * 50) / 26
}


 