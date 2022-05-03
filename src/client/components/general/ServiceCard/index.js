import React from 'react'
import './serviceCard.scss'

export default function ServiceCard({ img, description, link, alt, index }) {

  return (
    <div className='service' key={index}>
        <img src={img} alt={alt}></img>
        <p>{description}</p>
        <a href='#'>{link}</a>
    </div>
  )
}