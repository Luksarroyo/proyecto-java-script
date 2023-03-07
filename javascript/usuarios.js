
function validarFormulario (e){
    // preventdefault: previene el comportamiento por defeceto del navegador
    e.preventDefault();
    console.log('formulario enviado')

    console.log(formulario)
}

//1
const formulario = document.getElementById('formulario')
formulario.addEventListener ('submit', (e)=>{
    e.preventDefault()
    const apellido = document.getElementById('apellido').value
    const nombre = document.getElementById('nombre').value
    const contrasena = document.getElementById('contrasena').value
    const email = document.getElementById('email').value

    console.log(`Apellido: ${apellido} Nombre: ${nombre} Contrasena: ${contrasena} E-mail: ${email}`)
    console.log(JSON.stringify(`Apellido: ${apellido} Nombre: ${nombre} Contrasena: ${contrasena} E-mail: ${email}`))

    const formularioJson = (JSON.stringify(`Apellido: ${apellido} Nombre: ${nombre} Contrasena: ${contrasena} E-mail: ${email}`))
    localStorage.setItem ('formulario', formularioJson)
})



