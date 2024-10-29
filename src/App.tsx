import 'bootstrap/dist/js/bootstrap.min.js'
import { useState } from 'react'
import Header from './components/Header'
import Abaut from './components/Abaut'
import Skills from './components/Skills'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Abaut/>
    <Skills/>
    </>
  )
}

export default App
