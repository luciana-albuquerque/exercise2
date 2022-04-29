import React from 'react'
import './catalogue.scss';
import ProductCard from '../ProductCard';
import products from '../../../utils/products.json'

function Catalogue() {
  console.log(products.filter(product => product.category === "Most popular"))

  return (
    <div className='catalogue'>
        <section>
        <div className='menu'>
            <a>Most Popular</a>
            <a>Shop all products</a>
        </div>
        <div className='products'>
        {products.filter(product => product.category === 'Most popular').map((filtered, index) => { return (
          <ProductCard {...filtered}  />
        )})}
        </div>
        </section>
    </div>
  )
}

export default Catalogue