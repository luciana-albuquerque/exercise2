import React, { useState, useEffect } from 'react'
import ProductDisplay from '../ProductDisplay';
import './Cart.scss'

export default function Cart() {
    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState(false)

    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const handleCart = () => setShowCart(!showCart)
    console.log('cart on cart', cartLocalStorage)

  useEffect(() => {
    setCart(cartLocalStorage)
  }, [cart])

 const allProducts = JSON.parse(localStorage.getItem('products'));
 const list = allProducts.map(item => item.id);
  /*  const list = allProducts.map(item => {
    if (item.id === (cartLocalStorage.map(id => id))) {
      return product;
  }
  }) */
    console.log(list)  

  return (
    <div className='cart'>
        { cart.length !== 0 && <div className='quantity' onClick={handleCart}><p>{cart.length}</p></div>}
        { showCart && <ProductDisplay list={list} /> }
    </div>
  )
}
