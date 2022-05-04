import React from 'react'
import './servicesOffer.scss'
import ServiceCard from '../ServiceCard'
import { services } from '../../../utils/const'

export default function ServicesOffer() {
  return (
    <section className='servicesOffer'>
      {services.map((item, index) => 
        <React.Fragment key={index}>
          <ServiceCard {...item} />
        </React.Fragment>
      )}
    </section>
  )
}
