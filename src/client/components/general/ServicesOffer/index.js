import React from 'react'
import './servicesOffer.scss'
import ServiceCard from '../ServiceCard'
import { services } from '../../../utils/const'

function index() {
  return (
    <section className='servicesOffer'>
      {services.map((item, index) => 
        <ServiceCard {...item} index={index} />
      )}
    </section>
  )
}

export default index