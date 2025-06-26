const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
const opcion = document.getElementById("opcion");
const boton = document.getElementById("boton");
const segundoInput = document.getElementById("segundo");

function deshabilitar() {
  const segundo = Number(document.getElementById("segundo").value);
  if (opcion.value === "division" && segundo === 0) {
    boton.disabled = true;
  } else {
    boton.disabled = false;
  }
}

segundoInput.addEventListener("input", deshabilitar);
opcion.addEventListener("change", deshabilitar);

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const primero = Number(document.getElementById("primero").value);
  const segundo = Number(document.getElementById("segundo").value);
  const suma = primero + segundo;
  const resta = primero - segundo;
  const multiplicacion = primero * segundo;
  const division = primero / segundo;

  if (opcion.value == "") {
    alert("Seleccioná una opción");
  } else {
    if (opcion.value == "suma") {
      resultado.innerHTML = `El resultado es: ${suma}`;
      console.log(`La resultado es: ${suma}`);
    } else {
      if (opcion.value == "resta") {
        resultado.innerHTML = `El resultado es: ${resta}`;
        console.log(`El resultado es ${resta}`);
      } else {
        if (opcion.value == "multiplicacion") {
          resultado.innerHTML = `El resultado es: ${multiplicacion}`;
          console.log(`El resultado es: ${multiplicacion}`);
        } else {
          if (opcion.value == "division") {
            resultado.innerHTML = `El resultado es: ${division}`;
            console.log(`El resultado es: ${division}`);
          }
        }
      }
    }
  }
});
