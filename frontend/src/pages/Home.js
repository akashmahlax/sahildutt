import React from 'react'
import Hero from '../components/Hero'
import About from './About'
import Portfolio from './Portfolio'
import Services from './Services'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Portfolio/>
        <Services/>
        <Testimonials/>
        <Contact/>
    </div>
  )
}

export default Home