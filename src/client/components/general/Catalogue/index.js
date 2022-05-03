import React from 'react'
import './catalogue.scss';
import ProductCard from '../ProductCard';
import products from '../../../utils/products'

function Catalogue({category, beigeTheme }) {
  const filteredByCategory = products.filter(product => product.category === category.toString());

  return (
    <div className={ `catalogue ${ beigeTheme ? "beigeTheme" : ""}` }>
        <section>

          <div className='menu'>
              <a href="#">{category}</a>
              <a href="#">Shop all products</a>
          </div>

          <div className='products'>
          {filteredByCategory.map((filtered, index) => { return (
            <React.Fragment key={index}>
            <ProductCard {...filtered} />
            </React.Fragment>
          )})}
          </div>

        </section>
    </div>
  )
}

export default Catalogue