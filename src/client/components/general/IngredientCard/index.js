import React from 'react';
import './ingredientCard.scss'

export default function IngredientCard({ name, img, description, alt, index }) {
  return (
    <article className='ingredient'>
        <img src={img} alt={alt}></img>
        <h4>{name}</h4>
        <p>{description}</p>
    </article>
  )
}