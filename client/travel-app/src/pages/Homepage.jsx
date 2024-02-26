import React from 'react'
import LoggedInNavbar from './LoggedIn.jsx'
import Topsection from '../components/Topsection.jsx'
import Servicessection from '../components/Servicessection.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Showcase from '../components/Showcase.jsx'
import Newsletter from '../components/Newsletter.jsx'
import ServiceCard from '../components/servicecard.jsx'
import Footer from '../components/Footer.jsx'

const Homepage = () => {
  return (
    <div>
      <LoggedInNavbar/>
      <Topsection/>
   <Servicessection/>
   <Testimonials/>

   <Showcase/>
   <Newsletter/>

   <ServiceCard/>
   <Footer/>
    </div>
  )
}

export default Homepage
