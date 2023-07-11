import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/home-page/HomePage';
import ShopPage from './components/shop-page/ShopPage';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [shoppingCart, setShoppingCart] = useState({});

  return (
    <div className="App">
      <BrowserRouter>

        <NavBar shoppingCart={shoppingCart} />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage setShoppingCart={setShoppingCart} />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
