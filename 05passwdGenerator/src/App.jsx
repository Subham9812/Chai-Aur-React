import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const[passwd, setPasswd] = useState("")
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  
  // UseRef hook
  const passwdRef = useRef(null)

  const passwdGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "1234567890";
    if(charAllowed) str += "!@#$%^&*()[]`~*-+/\?<>=";

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // this line gives the index of that str
      pass += str.charAt(char);
    }

    setPasswd(pass);
  },[length, numberAllowed, charAllowed, setPasswd]);

  const copyPasswdToClipBoard = useCallback(() => {
    passwdRef.current?.select() // in here "?" this mean -> agar hai to select karo nehi to mat karo
    passwdRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(passwd)
  },[passwd])

  useEffect(() => {
    passwdGenerator();
  }, [length, numberAllowed, charAllowed, passwdGenerator])

  return (
    <>
      <div className='w-full max-w-max mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3 text-xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={passwd}
          className='outline-none bg-white w-full py-1 px-3'
          placeholder='Passwd'
          readOnly
          ref={passwdRef}
          />
          <button
          onClick={copyPasswdToClipBoard}
        className='outline-none cursor-pointer bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
      </div>
    </>
  )
}

export default App
