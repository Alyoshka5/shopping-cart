import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './components/home-page/HomePage';
import ShopPage from './components/shop-page/ShopPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/shop'>Shop</NavLink></li>
        </ul>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
