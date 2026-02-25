import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyContext, MyContextProvider } from './MyContext.jsx'

createRoot(document.getElementById('root')).render(
  
    // <MyContext.Provider value={"Hello subham"}>
    // <App />
    // </MyContext.Provider>

    <MyContextProvider>
      <App />
    </MyContextProvider>
)
