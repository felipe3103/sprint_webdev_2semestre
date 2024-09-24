import React from 'react';

const CardSection = () => {
  return (
    <section id="card-section">
      <div className="card">
        <img src="./public/assets/Nyck-De-Vries.jpg" alt="Nyck De Vries" />
        <h3>Nyck De Vries</h3>
        <p>Idade: 28 anos</p>
        <p>País: Holanda</p>
        <p>Títulos: Campeão da Fórmula E 2020-2021</p>
      </div>
      <div className="card">
        <img src="./public/assets/edoardo-mortara-mahindra.jpg" alt="Edoardo Mortara" />
        <h3>Edoardo Mortara</h3>
        <p>Idade: 36 anos</p>
        <p>País: Suíça</p>
        <p>Títulos: Vice-Campeão da Fórmula E 2020-2021</p>
      </div>
      <div className="card">
        <img src="./public/assets/carromahindra1.jpg" alt="Mahindra M10Electro" />
        <h3>Mahindra M10Electro</h3>
        <p>Top Speed: 200mph (320kph)</p>
        <p>Potência: 250kW (335bhp)</p>
        <p>Aceleração: 0-100km/h em 2.8 segundos</p>
        <p>Eficiência: Alta performance com foco em sustentabilidade</p>
      </div>
    </section>
  );
};

export default CardSection;