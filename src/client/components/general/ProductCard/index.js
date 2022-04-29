import React from 'react'
import {Button, Tag} from '../../index'
import './productCard.scss'
import {images} from '../../../assets/images/index'

// {img, title, description, price}

function ProductCard({title, description, price, img, tag }) {
  console.log('product card:', title)

  return (
    <article className='product' key={1}>
        { tag ? <Tag text={tag.text} theme={tag.theme} /> : ''}
        <img src={images.product1} alt='shampoo bottle' className='product-img'></img>
        <h3>{title}</h3>
        <p>{description}</p>
        <p className='price'>${price}</p>
        <Button text='Add to cart' icon={true} />
    </article>
  )
}

export default ProductCard