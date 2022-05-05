import React, { useState, useEffect, useContext } from 'react'
import './catalogue.scss';
import ProductCard from '../ProductCard';
import CartContext from '../../../context/CartContext';

function Catalogue({ratingName, ratingList, beigeTheme }) {
  const [cart, setCart] = useContext(CartContext)

  const addToCart = (productId) => {
    setCart(prev => ([...prev, productId]))
    localStorage.setItem('cart', JSON.stringify([...cart, productId])) 
  }

  //se deixar isso, ele zera o cart quando a pagina faz refresh. Se apagar, ele ignora o primeiro item adicionado.
/*   useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart, cart.length])  */
  
  return (
    <div className={ `catalogue ${ beigeTheme ? "beigeTheme" : ""}` }>
        <section>

          <div className='menu'>
              <a href="#">{ratingName}</a>
              <a href="#">Shop all products</a>
          </div>

          <div className='products'>
          {ratingList.map((filtered) => { return (
              <ProductCard {...filtered}  key={filtered.id} add={addToCart}/>       
              )})}
          </div>

        </section>
    </div>
  )
}

export default Catalogue