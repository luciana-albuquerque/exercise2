import React from 'react'
import Navbar from '../containers/Navbar'
import Hero from '../hero/Hero'
import Footer from '../containers/Footer'

function LandingPage() {
  return (
    <div className='landingPage'>
    <Navbar />
    <Hero />
    Landing Page
    <Footer />
    </div>
  )
}

export default LandingPage