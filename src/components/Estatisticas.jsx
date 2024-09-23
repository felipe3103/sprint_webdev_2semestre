import React from 'react';

const Estatisticas = () => {
  return (
    <div className="estatisticas-container">
      <h2>Estatísticas da Temporada</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Piloto</th>
            <th>Vitórias</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Piloto 1</td>
            <td>5</td>
            <td>120</td>
          </tr>
          <tr>
            <td>Piloto 2</td>
            <td>3</td>
            <td>95</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Estatisticas;
