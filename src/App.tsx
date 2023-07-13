import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/home-page/HomePage';
import ShopPage from './components/shop-page/ShopPage';
import Cart from './components/shop-page/Cart';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [shoppingCart, setShoppingCart] = useState<{ [key: number]: number }>({2: 1});

  return (
    <div className="App">
      <BrowserRouter>

        <NavBar shoppingCart={shoppingCart} />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop'>
            <Route index element={<ShopPage setShoppingCart={setShoppingCart} />} />
            <Route path='cart' element={<Cart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />} />
          </Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
