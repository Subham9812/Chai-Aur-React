import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-gray-500'>This is sub</h1> */}
      {/* <Header /> */}
      <Home />
      <Footer />
    </>
  )
}

export default App
