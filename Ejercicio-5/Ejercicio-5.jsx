function Calculadora() {
  const [primerNumero, setPrimerNumero] = React.useState(0);
  const [segundoNumero, setSegundoNumero] = React.useState(0);
  const [seleccionar, setSeleccionar] = React.useState("suma");
  const [resultado, setResultado] = React.useState(null);

  const clickBoton = () => {
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
      <p>Primer número</p>
      <input
        type="number"
        value={primerNumero}
        onChange={(evento) => setPrimerNumero(Number(evento.target.value))}
      />

      <p>Segundo número</p>
      <input
        type="number"
        value={segundoNumero}
        onChange={(evento) => setSegundoNumero(Number(evento.target.value))}
      />

      <p>Selecciona una operación</p>
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
        onClick={clickBoton}
        disabled={seleccionar === "division" && segundoNumero === 0}
      >
        Calcular
      </button>

      <p>El resultado es: {resultado !== null ? resultado : ""}</p>
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
