import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      
      <div className="main-content">
        <Sidebar />
        
        {/* Usando Outlet do react-router-dom para renderizar as rotas aninhadas */}
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
