import React from 'react'
import './catalogue.scss';
import ProductCard from '../ProductCard';

function Catalogue() {
  return (
    <div className='catalogue'>
        <section>
        <div className='menu'>
            <a>Most Popular</a>
            <a>Shop all products</a>
        </div>
        <div className='products'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
        </section>
    </div>
  )
}

export default Catalogue