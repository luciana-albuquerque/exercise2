import React from 'react';
import './ingredientCard.scss'

function index({ name, img, description, index }) {

  return (
    <article className='ingredient' key={index}>
        <img src={img} alt='ingredient'></img>
        <h4>{name}</h4>
        <p>{description}</p>
    </article>
  )
}

export default index