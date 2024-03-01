import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [counter, setCount] = useState(10)
  //const counter = 10
  const addValue = () => {
    setCount(counter + 1)
  }
  const removeValue = () =>{
    setCount(counter - 1)
  }

  return (
    <>
      <h1>This is Course on State {counter} </h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>
        addCount</button> {"  "}
      <button onClick={removeValue}>removeCount</button>
      <p><b>footer : {counter}</b></p>
    </>
  )
}

export default App
