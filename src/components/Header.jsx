// src/components/Header.jsx
import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header-container">
      {/* Título principal */}
      <h1>LUANA ENTREGAS NATURA</h1>
      {/* Subtítulo/mensagem de boas-vindas */}
      <p>Bem vindo(a) ao meu site.</p>
    </header>
  );
}

export default Header; // Exporta o componente para ser usado em outros lugares
