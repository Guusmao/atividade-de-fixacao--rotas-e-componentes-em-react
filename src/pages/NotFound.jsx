import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-container not-found">
      <h1>404</h1>
      <h2 style={{ marginBottom: '1rem' }}>Página Não Encontrada</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px' }}>
        Ops! Parece que você tentou acessar uma rota inválida ou a página foi movida permanentemente de seu endereço.
      </p>
      <Link to="/" className="btn-primary">Voltar para a Home</Link>
    </div>
  );
};

export default NotFound;
