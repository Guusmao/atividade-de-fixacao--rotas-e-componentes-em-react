import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Bem-vindo ao Nexus</h1>
      <p className="page-subtitle">Uma aplicação moderna React construída para provar as capacidades de roteamento com React Router, Suspense e lazy loading.</p>
      
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h2>Navegação Rápida</h2>
        <p>Explore as funcionalidades do nosso sistema:</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <Link to="/about" className="btn-primary">Conheça a Equipe</Link>
          <Link to="/contact" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--accent-color)' }}>Fale Conosco</Link>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="card glass-panel">
          <h3>⚡ Alta Performance</h3>
          <p>Utilizamos lazy loading (carregamento sob demanda) para que cada página seja carregada apenas quando o usuário precisar acessá-la.</p>
        </div>
        <div className="card glass-panel">
          <h3>🛣️ Roteamento Inteligente</h3>
          <p>O React Router permite navegação instantânea no lado do cliente sem que a página inteira precise ser recarregada pelo navegador.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
