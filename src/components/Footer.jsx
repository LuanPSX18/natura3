// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Mantém o arquivo CSS

function Footer() {
  // Substitua estes URLs pelos links reais do Instagram e WhatsApp da sua irmã
  const instagramUrl = 'https://www.instagram.com/seu-instagram'; // <-- **ATUALIZE ESTE LINK**
  // Para o WhatsApp, use o formato wa.me com o número no formato internacional (55 para Brasil + DDD + número)
  const whatsappUrl = 'https://wa.me/55DDDNUMERO'; // <-- **ATUALIZE ESTE LINK (Ex: 5521987654321)**

  return (
    <footer className="footer-container">
      {/* Link para o Instagram com ícone */}
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        {/* Ícone do Instagram usando Font Awesome */}
        <i className="fab fa-instagram"></i>
        {/* Texto do link */}
        Instagram
      </a>

      {/* Separador ou espaço entre os links */}
      <span className="footer-separator">|</span>

      {/* Link para o WhatsApp com ícone */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        {/* Ícone do WhatsApp usando Font Awesome */}
        <i className="fab fa-whatsapp"></i>
        {/* Texto do link */}
        WhatsApp
      </a>
    </footer>
  );
}

export default Footer;
