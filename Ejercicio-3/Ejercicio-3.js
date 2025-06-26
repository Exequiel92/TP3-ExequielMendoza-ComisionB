const boton = document.getElementById("boton");
const pagina = "https://jsonplaceholder.typicode.com/todos";
const lista = document.getElementById("lista");

boton.addEventListener("click", async () => {
  lista.innerHTML = "";

  const respuesta = await fetch(pagina);
  const tareas = await respuesta.json();

  const tareaCompleta = tareas.filter((tarea) => tarea.completed);

  tareaCompleta.forEach((tarea) => {
    const agregarItem = document.createElement("li");
    agregarItem.innerHTML = `✅ ${tarea.title}`;
    lista.appendChild(agregarItem);
  });

  console.log(tareaCompleta);
});
