import 'bootstrap/dist/js/bootstrap.min.js'
import { useState } from 'react'
import Header from './components/Header'
import Abaut from './components/Abaut'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Footter from './components/Footter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Abaut/>
    <Skills/>
    <Projects/>
    <Footter/>
    </>
  )
}

export default App
