import React from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
