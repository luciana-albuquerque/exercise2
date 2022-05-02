import React from 'react'
import './serviceCard.scss'

function index({ img, description, link, index }) {
  return (
    <div className='service' key={index}>
        <img src={img} alt='services offer'></img>
        <p>{description}</p>
        <a href='#'>{link}</a>
    </div>
  )
}

export default index