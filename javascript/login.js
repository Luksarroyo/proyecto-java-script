// TODO: capturar todos los elementos HTML
const form = document.getElementById("formulario");

//1revisar si local storage tiene info
//2grabar info en localstorage
//2.1 hacer fecth

function chequeoUsuarios() {
  var usuarios = JSON.parse(localStorage.getItem("usuarios"));
  //console.log(usuarios); //verifico si tengo informacion en local storage
  if (usuarios !== null) {
    console.log(usuarios); //verifico si tengo informacion en local storage
  } else {
    console.log("voy a hacer un fetch.")
    fetch("../usuarios.json")
      .then((resp) => resp.json())
      .then((data) => {
          console.log(data)
          localStorage.setItem("usuarios", JSON.stringify(data.usuarios));
      })
  }
}
//con esta funcion me aseguro que se ejecute primero en su totalidad el html y luego los carchivos js
window.addEventListener('load', function() {
  chequeoUsuarios();
});



//esta funcion me permite validar los datos de usuarios que voy a usar para logearme, como recomendacion la funcion se podria llamar handleLogin
function validarDatos() {
  var contrasena = document.getElementById("ingresoPassword").value;
  var email = document.getElementById("ingresoEmail").value;

  var usuarios = JSON.parse(localStorage.getItem("usuarios"));
  //console.log(usuarios) //verifico si tengo informacion en local storage
  var usuarioValido = false;

  for (var i = 0; i < usuarios.length; i++) {
    if (email === usuarios[i].email && contrasena === usuarios[i].contrasena) {
      usuarioValido = true;
      break;
    }
  }

  if (usuarioValido) {
    // El usuario y la contraseña son válidos, redireccionar a la página principal
    window.location.href = "pagina-de-prestamos.html";
  } else {
    // El usuario y/o la contraseña no son válidos, mostrar un mensaje de error
    alert(
      "El email o la contraseña ingresados no son válidos. Por favor, inténtalo de nuevo."
    );
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("submit form");
  validarDatos();
});
