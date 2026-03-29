import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Sobre o Projeto</h1>
      <p className="page-subtitle">Este projeto é uma atividade de fixação dedicada ao aprendizado prático de Rotas e Componentes em React.</p>
      
      <div className="card">
        <h2>Nossa Missão</h2>
        <p style={{ marginTop: '1rem' }}>
          O principal objetivo é aplicar os conhecimentos sobre <strong>React Router dom</strong>, simulando a criação de um SPA (Single Page Application) completo com múltiplas visões.
        </p>

        <h3 style={{ marginTop: '2rem' }}>O que aprendemos aqui:</h3>
        <ul style={{ paddingLeft: '2rem', marginTop: '1rem', color: 'var(--text-secondary)' }}>
          <li>Configuração do BrowserRouter e definição de rotas com `Routes` e `Route`.</li>
          <li>Layouts compartilhados utilizando o `Outlet`.</li>
          <li>Aumento de performance com `React.Suspense` e `React.lazy`.</li>
          <li>Tratamento de parâmetros dinâmicos de URL (ex: `/user/:id`).</li>
          <li>Construção de uma página 404 personalizada para rotas inválidas.</li>
        </ul>

        <div style={{ marginTop: '2rem' }}>
          <Link to="/contact" className="btn-primary">Entre em contato</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
