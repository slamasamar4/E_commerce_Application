import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductPage.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error.response?.data || error.message);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="product_page">
      <div className="product_title">
        <h2>Special SALE UP to 60% OFF!</h2>
        <h3>Hurry up and get your favorite products</h3>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <button onClick={() => addToCart(product)}>Add to List</button>
            </div>
          ))}
        </div>
        <h2>Pick your favorite items!</h2>
        <h3>Shopping List</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
