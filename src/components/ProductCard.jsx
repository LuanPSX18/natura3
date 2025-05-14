// src/components/ProductCard.jsx
import React from 'react';
import './ProductCard.css'; // Vamos criar este CSS depois

// Este componente recebe 'product' como uma propriedade (prop)
function ProductCard({ product }) {
  return (
    <div className="product-card">
      {/* Podemos adicionar uma imagem aqui futuramente */}
      {/* <img src={product.imageUrl} alt={product.name} /> */}

      {/* Nome do produto */}
      <h3>{product.name}</h3>

      {/* Preço do produto */}
      <p className="product-price">{product.price}</p>

      {/* Botão ou link de compra (opcional por enquanto) */}
      {/* <button>Comprar</button> */}
    </div>
  );
}

export default ProductCard;
