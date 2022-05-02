import React from 'react';
import './ingredients.scss'
import {ingredients} from '../../../utils/const'
import IngredientCard from '../IngredientCard'

function index() {

  return (
    <section className='ingredientList'>
        <h3>We use the best</h3>
        <p>Explore our innovative skincare products</p>
        <div className='list'>
            {ingredients.map((item, index) => 
              <IngredientCard {...item} index={index} />
            )}
        </div>
    </section>
  )
}

export default index