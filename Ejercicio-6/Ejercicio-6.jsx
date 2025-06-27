function IndiceMasaCorporal() {
  const [altura, setAltura] = React.useState(0);
  const [peso, setPeso] = React.useState(0);
  const [imc, setImc] = React.useState(0);

  const clickBoton = () => {
    const alturaEnMetros = altura / 100;
    const imc = peso / (alturaEnMetros * alturaEnMetros);
    console.log(`El IMC es igual a ${imc}`);
    setImc(imc);
  };

  const NivelBajoColor = {
    color: "yellow",
  };

  const nivelNormalColor = {
    color: "#7CFC00",
  };

  const sobrepesoColor = {
    color: "orange",
  };

  const obesidadColor = {
    color: "#ff6b6b",
  };

  return (
    <>
      <h1>Calculadora de IMC</h1>
      <p>Altura (cm.)</p>
      <input
        type="number"
        value={altura}
        onChange={(evento) => setAltura(Number(evento.target.value))}
      />
      <p>Peso (kg.)</p>
      <input
        type="number"
        value={peso}
        onChange={(evento) => setPeso(Number(evento.target.value))}
      />
      <br />
      <br />
      <button onClick={clickBoton} disabled={peso < 1 || altura < 1}>
        Calcular IMC
      </button>
      <p style={NivelBajoColor}>
        {imc > 0 && imc <= 18.5 ? "Nivel bajo" : null}
      </p>
      <p style={nivelNormalColor}>
        {imc >= 18.5 && imc <= 24.9 ? "Nvel normal" : null}
      </p>
      <p style={sobrepesoColor}>
        {imc >= 25 && imc <= 29.9 ? "Sobrepeso" : null}
      </p>
      <p style={obesidadColor}>{imc > 30 ? "Obesidad" : null}</p>
    </>
  );
}

function App() {
  return (
    <div>
      <IndiceMasaCorporal />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
