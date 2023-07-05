import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/home-page/HomePage';
import ShopPage from './components/shop-page/ShopPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
