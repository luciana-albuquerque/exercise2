import React, { ReactElement } from 'react';
import './ingredientCard.scss'
import {IngredientCardT} from '../../../interfaces/shared'

export default function IngredientCard({ name, img, description }: IngredientCardT): ReactElement {
  return (
    <article className='ingredient'>
        <img src={img} alt={name}></img>
        <h4>{name}</h4>
        <p>{description}</p>
    </article>
  )
}