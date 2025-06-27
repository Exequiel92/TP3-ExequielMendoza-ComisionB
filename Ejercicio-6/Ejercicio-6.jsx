/*Escribir un programa con HTML+React con formulario que permita calcular el IMC de una
persona. Luego de realizar el cálculo, mostrar un mensaje con las siguientes características:
• Si IMC < 18.5 mostrar un mensaje en tono amarillo indicando que se trata un nivel bajo.
• Si IMC está entre 18.5 y 24.9 mostrar un mensaje en tono verde indicando que se trata de un
nivel normal.
• Si IMC está entre 25 y 29.9 mostrar un mensaje en tono naranja indicando que se trata de un
nivel de sobrepeso.
• Si IMC es mayor o igual a 30 mostrar un mensaje en tono rojo indicando que se trata de un
nivel de obesidad.*/

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
