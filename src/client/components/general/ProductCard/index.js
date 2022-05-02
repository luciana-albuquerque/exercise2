import React from 'react'
import {Button, Tag} from '../../index'
import './productCard.scss'

function ProductCard({title, description, price, img, tag, index }) {
  console.log(index)

  return (
    <article className='product' key={index}>
        { tag ? <Tag text={tag.text} theme={tag.theme} /> : ''}
        <img src={img} alt='shampoo bottle' className='product-img'></img>
        <h6>{title}</h6>
        <p>{description}</p>
        <p className='price'>${price}</p>
        <Button text='Add to cart' icon={true} />
    </article>
  )
}

export default ProductCard