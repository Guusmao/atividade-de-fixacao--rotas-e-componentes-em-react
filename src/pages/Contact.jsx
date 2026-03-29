import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado pela mensagem, ${formData.name}! (Simulação)`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Contato</h1>
      <p className="page-subtitle">Preencha o formulário abaixo para enviar uma mensagem de teste.</p>
      
      <div className="card" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome Completo</label>
            <input 
              type="text" 
              id="name" 
              className="form-control" 
              placeholder="Digite seu nome" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="form-control" 
              placeholder="voce@exemplo.com" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea 
              id="message" 
              className="form-control" 
              rows="5" 
              placeholder="O que você deseja nos dizer?" 
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>Enviar Mensagem</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
