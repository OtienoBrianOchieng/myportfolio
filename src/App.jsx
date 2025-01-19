import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Catalog from './components/Catalog'


function App() {


  return (
    <>
          <div>
              <Navbar />
            <section>
              <Hero />
            </section>
            <section id="about" className='pt-12'>
              <About />
            </section>
            <section id="education" className='pt-12'>
              <Education />
            </section>
            <section id="skills" className='pt-12'>
              <Skills />              
            </section>
            <section id="projects" className='pt-12'>
              <Projects />              
            </section>
            <section id="catalog" className='pt-12'>
              <Catalog />            
            </section>
            <section id="contact" className='pt-12'>
              <Contact />
            </section>
            <section>
              <Footer />
            </section> 
        </div>
    </>
  )
}

export default App
