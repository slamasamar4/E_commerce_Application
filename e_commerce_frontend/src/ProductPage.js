import React, { useState } from 'react';
import './ProductPage.css';

const products = [
  { id: 1, name: 'Product 1', image: 'path/to/image1.jpg' },
  { id: 2, name: 'Product 2', image: 'path/to/image2.jpg' },
  { id: 3, name: 'Product 3', image: 'path/to/image3.jpg' },
];

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <button onClick={() => addToCart(product)}>Add to List</button>
          </div>
        ))}
      </div>
      <h2>Your List</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;