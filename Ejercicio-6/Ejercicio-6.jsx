function IndiceMasaCorporal() {
  const [altura, setAltura] = React.useState(0);
  const [peso, setPeso] = React.useState(0);
  const [imc, setImc] = React.useState(0);

  const esperar = (evento) => {
    evento.preventDefault();

    const alturaEnMetros = altura / 100;
    const imcCalculado = peso / (alturaEnMetros * alturaEnMetros);
    console.log(`El IMC es igual a ${imcCalculado}`);
    setImc(imcCalculado);
  };

  const NivelBajoColor = {
    color: "yellow",
  };

  const nivelNormalColor = {
    color: "green",
  };

  const sobrepesoColor = {
    color: "orange",
  };

  const obesidadColor = {
    color: "red",
  };

  return (
    <form onSubmit={esperar}>
      <h1>Calculadora de IMC</h1>

      <label htmlFor="altura">Altura (cm.)</label>
      <input
        id="altura"
        type="number"
        value={altura}
        onChange={(evento) => setAltura(Number(evento.target.value))}
      />

      <label htmlFor="peso">Peso (kg.)</label>
      <input
        id="peso"
        type="number"
        value={peso}
        onChange={(evento) => setPeso(Number(evento.target.value))}
      />

      <button type="submit" disabled={peso < 1 || altura < 1}>
        Calcular IMC
      </button>

      <p style={NivelBajoColor}>
        {imc > 0 && imc <= 18.5 ? "Nivel bajo" : null}
      </p>
      <p style={nivelNormalColor}>
        {imc >= 18.5 && imc <= 24.9 ? "Nivel normal" : null}
      </p>
      <p style={sobrepesoColor}>
        {imc >= 25 && imc <= 29.9 ? "Sobrepeso" : null}
      </p>
      <p style={obesidadColor}>{imc >= 30 ? "Obesidad" : null}</p>
    </form>
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
