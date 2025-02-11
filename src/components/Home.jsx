import React from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Services from './Services'
import Contact from './Contact'


const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
