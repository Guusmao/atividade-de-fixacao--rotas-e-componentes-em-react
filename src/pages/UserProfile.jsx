import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulating an API fetch based on the dynamic URL parameter (:id)
  useEffect(() => {
    setLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      if (id === 'gusmao') {
        setUserData({
          id: 'gusmao',
          name: 'Gusmão',
          role: 'Professor',
          bio: 'Especialista em desenvolvimento web e mentor de tecnologia.'
        });
      } else {
        setUserData(null);
      }
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <div className="page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Buscando dados do usuário...</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="page-container">
        <h1 className="page-title">Usuário Não Encontrado</h1>
        <p className="page-subtitle">Não foi possível localizar nenhum usuário com o ID: <strong>{id}</strong></p>
        <Link to="/" className="btn-primary">Voltar para a Segurança</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="card glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div className="user-avatar">
          {userData.name.charAt(0)}
        </div>
        <h1 className="page-title" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{userData.name}</h1>
        <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: '1.5rem' }}>{userData.role}</p>
        
        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px', maxWidth: '400px', width: '100%' }}>
          <p style={{ color: 'var(--text-secondary)' }}>{userData.bio}</p>
        </div>

        <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          Este perfil foi gerado dinamicamente usando a rota: <code style={{ color: 'var(--text-primary)' }}>/user/{id}</code>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
