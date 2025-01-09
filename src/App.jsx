import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'

function App() {
  
  return (
    <>
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
    </div>
    </>
  )
}

export default App
