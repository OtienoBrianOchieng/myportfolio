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
            <section>
              <Navbar />
            </section>
            <section>
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="education">
              <Education />
            </section>
            <section id="skills">
              <Skills />              
            </section>
            <section id="projects">
              <Projects />              
            </section>
            <section id="catalog">
              <Catalog />            
            </section>
            <section id="contact">
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
