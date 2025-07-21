import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import About from './components/About/About'

function App() {

  return (
    <>
     <Navbar/>
    <Hero/>
    <About/>
    </>
  )
}

export default App
