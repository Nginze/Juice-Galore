import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section5 from '../components/Section5'
import Section4 from '../components/Secton4'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </>
  )
}

export default Home