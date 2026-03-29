import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar glass-panel">
      <div>
        <h3>Menu Principal</h3>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}>
          Início
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}>
          Sobre Nós
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}>
          Fale Conosco
        </NavLink>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Perfis de Demonstração</h3>
        <NavLink to="/user/gusmao" className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}>
          Perfil do Gusmão
        </NavLink>
        <NavLink to="/user/404" className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}>
          Usuário Inexistente
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
