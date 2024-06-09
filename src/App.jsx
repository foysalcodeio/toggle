import { useState } from 'react'
import './App.css'
import Toggle from './Components/Toggle'
import useLocalStorage from 'use-local-storage'
function App() {
  // const[isDark, setIsDark] = useState(true)
  const[isDark, setIsDark] = useLocalStorage(true)

  return (
    <>
      <div className='App' data-theme={isDark ? "dark" : "light"}>
        <Toggle 
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />
        <h1 className='title'>Hello World</h1>
        <div className='box'>
          <h2>This is Box</h2>
        </div>
      </div>
    </>
  )
}

export default App
