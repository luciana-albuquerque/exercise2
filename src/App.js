import LandingPage from './client/components/views/LandingPage';
import Navbar from './client/components/containers/Navbar';
import Footer from './client/components/containers/Footer';
import './client/assets/styles/_styles.scss';
import React, { useState, useEffect } from 'react'
import CartContext from './client/context/CartContext';

function App() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart'))
    if (cartItems) setCart(cartItems)
    const allProducts = JSON.parse(localStorage.getItem('products'))
    if (allProducts) setProducts(allProducts)
  }, [])

  return (
    <div className="App" >
      <CartContext.Provider value={[cart, setCart]}>
        <Navbar />
        <LandingPage />
      </CartContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
