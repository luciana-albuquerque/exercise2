import LandingPage from './client/components/views/LandingPage';
import Navbar from './client/components/containers/Navbar';
import Footer from './client/components/containers/Footer';
import './client/assets/styles/_styles.scss';
import { useState, useEffect } from 'react'
import CartContext from './client/context/CartContext';

function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart'))
    if (cartItems) setCart(cartItems)
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
