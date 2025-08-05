import React, { useState } from "react";

function BitolaCalculator() {
  const [potencia, setPotencia] = useState("");
  const [distancia, setDistancia] = useState("");
  const [bitola110, setBitola110] = useState("0.00");
  const [bitola220, setBitola220] = useState("0.00");

  const calcularBitola = () => {
    const p = parseFloat(potencia);
    const d = parseFloat(distancia);

    if (isNaN(p) || isNaN(d) || p <= 0 || d <= 0) {
      setBitola110("0.00");
      setBitola220("0.00");
      return;
    }

    
    const corrente110 = p / 110;
    const corrente220 = p / 220;

    const resistividade = 0.0175; 
    const quedaPermitida = 5; 

   
    const bitola110Valor = (2 * resistividade * corrente110 * d) / (110 * (quedaPermitida / 100));
    const bitola220Valor = (2 * resistividade * corrente220 * d) / (220 * (quedaPermitida / 100));

    setBitola110(!isNaN(bitola110Valor) ? bitola110Valor.toFixed(2) : "0.00");
    setBitola220(!isNaN(bitola220Valor) ? bitola220Valor.toFixed(2) : "0.00");
  };

  return (
    <div>
      <h2>Calculadora de Bitola de Fio</h2>

      <label>Potência (W): </label>
      <input
        type="number"
        value={potencia}
        onChange={(e) => setPotencia(e.target.value)}
      />

      <br />

      <label>Distância (m): </label>
      <input
        type="number"
        value={distancia}
        onChange={(e) => setDistancia(e.target.value)}
      />

      <br />
      <button onClick={calcularBitola}>Calcular Bitola</button>

      <h3>Resultado:</h3>
      <p>Bitola para 110V: {bitola110} mm²</p>
      <p>Bitola para 220V: {bitola220} mm²</p>
    </div>
  );
}

export default BitolaCalculator;
