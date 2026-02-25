import { useContext, useState } from 'react'
import './App.css'
import A from './components/A'
import B from './components/B'
import { MyContext, useMyContext } from './MyContext'

function App() {

  // const data = useContext(MyContext); // Instead of useing this, 

  const data = useMyContext(); // use this

  return (
    <>
      <div className='bg-red-500 p-10'>
        App
        <A/>
        <B/>
      </div>
    </>
  )
}

export default App
