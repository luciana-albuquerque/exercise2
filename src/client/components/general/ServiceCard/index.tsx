import React, { ReactElement } from 'react'
import './serviceCard.scss'

type ServiceCardT = {
  img: any, 
  description: string, 
  link: string, 
}

export default function ServiceCard({ img, description, link }: ServiceCardT): ReactElement {

  return (
    <div className='service'>
        <img src={img} alt={description}></img>
        <p>{description}</p>
        <a href='#'>{link}</a>
    </div>
  )
}