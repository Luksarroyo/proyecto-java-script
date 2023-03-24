// capturo los elementos HTML con los que necesito interactuar via JS
const form = document.getElementById("formulario");

// TODO: capturar todos los elementos HTML con los que necesito interactuar, despues borrar este comentario
// const ape = document.getElementById("apellido")

function agregarUsuario() {
  // Obtener los valores del formulario solo si el evento submit es disparado (cuando el usuario requiera lanzar el formulario para registrarse)
  const apellido = document.getElementById("apellido").value;
  const nombre = document.getElementById("nombre").value;
  const dni = document.getElementById("dni").value;
  const contrasena = document.getElementById("contrasena").value;
  const email = document.getElementById("email").value;

  // Crear un objeto de usuario
  const nuevoUsuario = {
    apellido: apellido,
    nombre: nombre,
    dni: dni,
    contrasena: contrasena,
    email: email,
  };

  // Obtener la lista de usuarios existente desde el local storage
  let listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));

  // Si no existe la lista, crear un array vacío
  if (!listaUsuarios) {
    listaUsuarios = [];
  }

  // Agregar el nuevo usuario al array
  listaUsuarios.push(nuevoUsuario);

  // Guardar la lista de usuarios actualizada en el local storage
  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  //console.log('submit')
  agregarUsuario();
});
