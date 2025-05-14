// src/components/MainContent.jsx
import React from 'react';
import ProductCard from './ProductCard'; // Importa o componente do card
import './MainContent.css'; // Vamos criar este CSS depois

// Dados de exemplo para 10 produtos
const products = [
  { id: 1, name: 'Hidratante Corporal', price: 'R$ 45,90' },
  { id: 2, name: 'Perfume Essencial', price: 'R$ 120,00' },
  { id: 3, name: 'Sabonete Líquido', price: 'R$ 25,50' },
  { id: 4, name: 'Shampoo Natura Lumina', price: 'R$ 35,00' },
  { id: 5, name: 'Condicionador Natura Lumina', price: 'R$ 38,00' },
  { id: 6, name: 'Desodorante Roll-on', price: 'R$ 18,90' },
  { id: 7, name: 'Protetor Solar Facial', price: 'R$ 55,00' },
  { id: 8, name: 'Batom Cremoso', price: 'R$ 29,90' },
  { id: 9, name: 'Máscara Capilar', price: 'R$ 42,00' },
  { id: 10, name: 'Óleo Sève Amêndoas', price: 'R$ 60,00' },
];

function MainContent() {
  return (
    <main className="main-container">
      {/* Mapeia o array de produtos para criar um ProductCard para cada um */}
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
        // A prop 'key' é importante para o React identificar cada item na lista
      ))}
    </main>
  );
}

export default MainContent;
