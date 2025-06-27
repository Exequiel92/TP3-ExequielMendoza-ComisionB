function Botones() {
  const [derechoOff, setDerechoOff] = React.useState(true);
  const [izquierdoOff, setIzquierdoOff] = React.useState(false);

  const clickIzquierdo = () => {
    setDerechoOff(!derechoOff);
    setIzquierdoOff(!izquierdoOff);
    console.log("Click izquierdo");
    console.log("Habilita botón derecho");
    console.log("Deshabilita botón izquierdo");
  };

  const clickDerecho = () => {
    setDerechoOff(!derechoOff);
    setIzquierdoOff(!izquierdoOff);
    console.log("Click derecho");
    console.log("Habilita botón izquierdo");
    console.log("Deshabilita botón derecho");
  };

  return (
    <>
      <button
        onClick={clickIzquierdo}
        disabled={izquierdoOff}
        className="botonIzquierdo"
      >
        Izquierdo
      </button>
      -----
      <button
        onClick={clickDerecho}
        className="botonDerecho"
        id="botonDerecho"
        disabled={derechoOff}
      >
        Derecho
      </button>
    </>
  );
}

function App() {
  return (
    <div>
      <Botones />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
