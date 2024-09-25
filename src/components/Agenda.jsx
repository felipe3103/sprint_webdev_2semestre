import React from 'react';

const Agenda = () => {
  return (
    <div className="agenda-container">
      <h2>Agenda da Temporada</h2>
      <div className="agenda-item">
        <h3>Cidade 1</h3>
        <p>Data: 12 de Março</p>
      </div>
      <div className="agenda-item">
        <h3>Cidade 2</h3>
        <p>Data: 20 de Abril</p>
      </div>
      <div className="agenda-item">
        <h3>Cidade 3</h3>
        <p>Data: 26 de Setembro</p>
      </div>
      <div className="agenda-item">
        <h3>Cidade 4</h3>
        <p>Data: 12 de Outubro</p>
      </div>
      <div className="agenda-item">
        <h3>Cidade 5</h3>
        <p>Data: 2 de Novembro</p>
      </div>
    </div>
  );
};

export default Agenda;
