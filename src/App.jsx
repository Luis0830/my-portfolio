import React from 'react'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Exp from './components/exp/Exp'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Exp />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App