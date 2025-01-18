import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {


  return (
    <>
        <div>
            <section>
              <Navbar />
            </section>
            {/* <section id="about">
              <h2>About Section</h2>
            </section>
            <section id="projects">
              <h2>Projects Section</h2>
            </section>
            <section id="contact">
              <Contact />
            </section>
            <section>
              <Footer />
            </section> */}
        </div>
    </>
  )
}

export default App
