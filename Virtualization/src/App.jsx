import { useState } from 'react'
import './App.css'
import Vt from './vt'
import ReactVirtuoso from './ReactVirtuoso'

function App() {
  const arr = Array.from({length:100000},(_,index) => index + 1);
  return (
    <>
      {/* <Vt list={arr} height={300} itemHeight={30}/> */}

      <ReactVirtuoso list={arr}/>
    </>
  )
}

export default App
