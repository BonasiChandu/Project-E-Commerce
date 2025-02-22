import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Shop from './pages/Shop';
import Shopcategory from './pages/Shopcategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import womens_banner from './components/Assets/banner_women.png';
import kids_banner from './components/Assets/banner_kids.png';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const [user, setUser] = useState(null); 
  
  return (
    <div>
      <BrowserRouter>
        {isLoggedIn && <Navbar user={user} />}
        
        {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/mens" element={<Shopcategory banner={men_banner} category="men" />} />
            <Route path="/womens" element={<Shopcategory banner={womens_banner} category="women" />} />
            <Route path="/kids" element={<Shopcategory banner={kids_banner} category="kid" />} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<LoginSignup setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
            <Route path="/login" element={<LoginSignup setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
        
        {isLoggedIn && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;

