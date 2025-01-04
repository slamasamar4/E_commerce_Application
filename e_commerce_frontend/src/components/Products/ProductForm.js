import React, { useState } from "react";
import { createProduct } from "../../services/productService";

const ProductForm = () => {
  const [product, setProduct] = useState({ name: "", price: 0, picture: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(product);
    alert("Product added successfully!");
    setProduct({ name: "", price: 0, picture: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Picture URL"
        value={product.picture}
        onChange={(e) => setProduct({ ...product, picture: e.target.value })}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
