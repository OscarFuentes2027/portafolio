import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useState } from 'react'
import Header from './components/Header'
import Abaut from './components/Abaut'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Abaut/>
    </>
  )
}

export default App
