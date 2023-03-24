//simulador

const dinero = document.getElementById("dinero");
const tiempo = document.getElementById("tiempo");
const interes = document.getElementById("interes");
const btnCalcular = document.getElementById("btnCalcular");
const llenarTabla = document.querySelector("#tabla tbody");

btnCalcular.addEventListener("click", () => {
  calcularCuota(dinero.value, interes.value, tiempo.value);
});

function calcularCuota(dinero, interes, tiempo) {
  while (llenarTabla.firstChild) {
    llenarTabla.removeChild(llenarTabla.firstChild);
  }

  let fechas = [];
  let fechaActual = Date.now();
  let mes_actual = moment(fechaActual);
  mes_actual.add(1, "month");

  let pagoInteres = 0,
    pagoCapital = 0,
    cuota = 0;

  cuota =
    (dinero * ((Math.pow(1 + interes / 100, tiempo) * interes) / 100)) /
    (Math.pow(1 + interes / 100, tiempo) - 1);

  for (let i = 1; i <= tiempo; i++) {
    pagoInteres = parseFloat(dinero * (interes / 100));
    pagoCapital = cuota - pagoInteres;
    dinero = parseFloat(dinero - pagoCapital);

    //fechas
    fechas[i] = mes_actual.format("DD-MM-YYYY");
    mes_actual.add(1, "month");

    //tablaa
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${fechas[i]}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${pagoCapital.toFixed(2)}</td>
            <td>${pagoInteres.toFixed(2)}</td>
            <td>${dinero.toFixed(2)}</td>
        `;

    llenarTabla.appendChild(row);
  }
}
