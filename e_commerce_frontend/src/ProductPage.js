import React, { useState } from 'react';
import './ProductPage.css';

const products = [
  { id: 1, name: ' Body Scrub', image: require('./assets/scrub.jpg') },
  { id: 2, name: 'exfoliating_selicone', image: require('./assets/exfoliating_selicone.jpg') },
  { id: 3, name: 'givenchy perfume', image: require('./assets/givenchy.jpg') },
  { id: 4, name: 'johnson shower gel', image: require('./assets/johnson.jpg') },
  { id: 5, name: 'pink_vaseline', image: require('./assets/pink_vaseline.jpg') },
  { id: 6, name: 'hair serum', image: require('./assets/serum.jpg') },

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