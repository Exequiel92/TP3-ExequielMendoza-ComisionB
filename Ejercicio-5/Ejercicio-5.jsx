function Calculadora() {
  const [primerNumero, setPrimerNumero] = React.useState(0);
  const [segundoNumero, setSegundoNumero] = React.useState(0);

  const [seleccionar, setSeleccionar] = React.useState("suma");
  const seleccionarOpcion = (evento) => {
    setSeleccionar(evento.target.value);
  };

  const clickBoton = () => {
    if (seleccionar === "suma") {
      const resultado = primerNumero + segundoNumero;
      console.log(`El resultado es ${suma}`);
      return resultado;
    } else if (seleccionar === "resta") {
      const resta = primerNumero - segundoNumero;
      console.log(`El resultado es ${resta}`);
      return resta;
    } else if (seleccionar === "multiplicacion") {
      const multiplicacion = primerNumero * segundoNumero;
      console.log(`El resultado es ${multiplicacion}`);
      return multiplicacion;
    } else if (seleccionar === "division" && segundoNumero !== 0) {
      const division = primerNumero / segundoNumero;
      console.log(`El resultado es ${division}`);
      return division;
    }
  };

  return (
    <>
      <h1>CALCULAR</h1>
      <p>Primer número</p>
      <input
        type="number"
        value={primerNumero}
        onChange={(evento) => setPrimerNumero(Number(evento.target.value))}
      />
      <br />
      <br />
      <p>Segundo número</p>
      <input
        type="number"
        value={segundoNumero}
        onChange={(evento) => setSegundoNumero(Number(evento.target.value))}
      />
      <br />
      <br />
      <p>Selecciona una operación</p>
      <select value={seleccionar} onChange={seleccionarOpcion}>
        <option value="suma">Sumar</option>
        <option value="resta">Restar</option>
        <option value="multiplicacion">Multiplicar</option>
        <option value="division">Dividir</option>
      </select>
      <br />
      <br />
      <button
        onClick={clickBoton}
        type="submit"
        disabled={seleccionar === "division" && segundoNumero === 0}
      >
        Calcular
      </button>
      <br />
      <br />
      <p>El resultado es:</p>
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
