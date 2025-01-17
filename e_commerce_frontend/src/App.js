import './App.css';
import ProductPage from './ProductPage';
import Login from './Login';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;