// src/App.jsx
import React from 'react';
import Header from './components/Header'; // Importa o componente Header
import MainContent from './components/MainContent'; // Importa o componente MainContent
import ContactMessage from './components/ContactMessage'; // Importa o novo componente ContactMessage
import Footer from './components/Footer'; // Importa o componente Footer
import './App.css'; // Mantém o App.css

function App() {
  return (
    <div className="App">
      {/* Renderiza o componente Header */}
      <Header />

      {/* Renderiza o componente MainContent com os cards de produto */}
      <MainContent />

      {/* Renderiza o novo componente ContactMessage */}
      <ContactMessage />

      {/* Renderiza o componente Footer */}
      <Footer />
    </div>
  );
}

export default App; // Exporta o componente App
