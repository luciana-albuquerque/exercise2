import React, { useState } from 'react'
import './catalogue.scss';
import ProductCard from '../ProductCard';

function Catalogue({ratingName, ratingList, beigeTheme }) {
  const [cartList, setCartList] = useState([])
  
  localStorage.setItem('cart', JSON.stringify(cartList));
  const xxx = JSON.parse(localStorage.getItem('cart'));
  /* console.log('cart local storage in catalogue',xxx) */

  const addToCart = (productId) => {
    const updatedList = [...cartList, productId]
    setCartList(updatedList);
  }

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