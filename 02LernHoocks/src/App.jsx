import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(7);
  // let counter = 15;
  const addValue = () => {
    if(counter < 20) setCounter(counter + 1);
    // console.log("add val", counter)
  }

  const removeVal = () => {
    if(counter > 0) setCounter(counter - 1);
    // console.log("remove val", counter)
  }
  return (
    <>
      <h1>Heo brothers</h1>
      <h1>Counter value : {counter}</h1>

      <button
      onClick={addValue}
      >Add value</button>
      <button
      onClick={removeVal}
      >Remove value</button>
    </>
  )
}

export default App
