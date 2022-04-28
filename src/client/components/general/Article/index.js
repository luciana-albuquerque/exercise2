import React from 'react'
import Button from '../Button'
import './article.scss'

function Article( {title1, title2, text, button} ) {

  return (
    <article className='article'>
        <h1> {title1} <br/> {title2} </h1>
        <p> {text} </p>
        <Button text={button}/>
    </article>
  )
}

export default Article