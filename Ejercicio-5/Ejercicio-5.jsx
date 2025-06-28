function Calculadora() {
  const [primerNumero, setPrimerNumero] = React.useState(0);
  const [segundoNumero, setSegundoNumero] = React.useState(0);
  const [seleccionar, setSeleccionar] = React.useState("suma");
  const [resultado, setResultado] = React.useState(null);

  const esperar = (evento) => {
    evento.preventDefault();

    let resultadoPreliminar;
    if (seleccionar === "suma") {
      resultadoPreliminar = primerNumero + segundoNumero;
    } else if (seleccionar === "resta") {
      resultadoPreliminar = primerNumero - segundoNumero;
    } else if (seleccionar === "multiplicacion") {
      resultadoPreliminar = primerNumero * segundoNumero;
    } else if (seleccionar === "division") {
      resultadoPreliminar = primerNumero / segundoNumero;
    }
    console.log(`El resultado es ${resultadoPreliminar}`);
    setResultado(resultadoPreliminar);
  };

  return (
    <>
      <form onSubmit={esperar}>
        <label htmlFor="primerNumero">Primer número</label>
        <input
          type="number"
          id="primerNumero"
          value={primerNumero}
          onChange={(evento) => setPrimerNumero(Number(evento.target.value))}
        />

        <label htmlFor="segundoNombre">Segundo número</label>
        <input
          type="number"
          id="segundoNumero"
          value={segundoNumero}
          onChange={(evento) => setSegundoNumero(Number(evento.target.value))}
        />

        <label>Selecciona una operación</label>
        <select
          value={seleccionar}
          onChange={(evento) => setSeleccionar(evento.target.value)}
        >
          <option value="suma">Sumar</option>
          <option value="resta">Restar</option>
          <option value="multiplicacion">Multiplicar</option>
          <option value="division">Dividir</option>
        </select>
        <br />
        <br />

        <button
          type="submit"
          disabled={seleccionar === "division" && segundoNumero === 0}
        >
          Calcular
        </button>

        <p>El resultado es: {resultado !== null ? resultado : ""}</p>
      </form>
    </>
  );
}

function App() {
  return (
    <div>
      <Calculadora />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
