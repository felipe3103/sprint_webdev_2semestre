import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CardSection from './components/CardSection';
import Login from './components/Login';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Estatisticas from './components/Estatisticas';
import Agenda from './components/Agenda';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/estatisticas" element={<Estatisticas />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
