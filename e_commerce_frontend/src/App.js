import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientList from "./components/Users/ClientList";
import ClientForm from "./components/Users/ClientForm";
import ProductList from "./components/Products/ProductList";
import ProductForm from "./components/Products/ProductForm";

const App = () => {
  return (
    <div className="App">
      <Router>
        <h1>Welcome to the Client Management System</h1>
        <Routes>
          <Route path="/clients" element={<ClientList />} />
          <Route path="/add-client" element={<ClientForm />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<ProductForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
