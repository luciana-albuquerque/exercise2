import React from 'react'
import './catalogue.scss';
import ProductCard from '../ProductCard';
import products from '../../../utils/products'

function Catalogue({category, beigeTheme }) {
  console.log(beigeTheme)

  return (
    <div className={ `catalogue ${ beigeTheme ? "beigeTheme" : ""}` }>
        <section>
        <div className='menu'>
            <a>{category}</a>
            <a>Shop all products</a>
        </div>
        <div className='products'>
        {products.filter(product => product.category === category.toString()).map((filtered, index) => { return (
          <ProductCard {...filtered} index={index} />
        )})}
        </div>
        </section>
    </div>
  )
}

export default Catalogue