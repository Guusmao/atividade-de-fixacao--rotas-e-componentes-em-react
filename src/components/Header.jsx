import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header glass-panel">
      <div className="header-logo">
        <Link to="/">React Nexus</Link>
      </div>
      
      <nav className="header-nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Sobre
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Contato
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
