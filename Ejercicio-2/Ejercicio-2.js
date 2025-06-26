const formulario = document.getElementById("formulario");

const parrafo = document.getElementById("parrafo");

const entrada = document.getElementById("filtrarFruta");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const frutas = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

  const encontrarFrutas = frutas.filter(function (fruta) {
    if (entrada.value.trim() !== "") {
      return fruta.includes(entrada.value.toLowerCase());
    } else {
      parrafo.innerHTML = "Ingresa una fruta para realizar la búsqueda";
    }
  });

  if (entrada.value.trim() === "") {
    parrafo.innerHTML = "Ingresar fruta";
  } else {
    parrafo.innerHTML = encontrarFrutas.join(", ");
  }

  console.log("Frutas:", frutas);
  console.log("Frutas:", encontrarFrutas);
});
