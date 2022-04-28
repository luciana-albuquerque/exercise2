import React from 'react'
import Button from '../Button'
import './productCard.scss'
import product from '../../../assets/images/rachel-cheng-NEQHUeM72c0-unsplash.jpg' ;

// {img, title, description, price}

function ProductCard() {
  return (
    <div className='product'>
        <img src={product} alt='shampoo bottle'></img>
        <h3>Title</h3>
        <p>description</p>
        <p>price</p>
        <Button text='Add to cart' />
    </div>
  )
}

export default ProductCard