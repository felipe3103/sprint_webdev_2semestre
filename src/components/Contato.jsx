import React, { useState } from 'react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    cep: '',
    endereco: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
  };

  return (
    <div className="contato-container">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Telefone</label>
        <input
          type="tel"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="(00) 00000-0000"
        />

        <label>CPF</label>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          placeholder="000.000.000-00"
        />
        
        <label>CEP</label>
        <input
          type="text"
          name="cep"
          value={formData.cep}
          onChange={handleChange}
          placeholder="00000-000"
        />

        <label>Endereço</label>
        <input
          type="text"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
          placeholder="Rua, Número, Bairro, Cidade"
        />

        <label>Mensagem</label>
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
        />
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;

