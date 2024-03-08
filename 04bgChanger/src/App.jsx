import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('red')

  const addVal = ()=>{
    setCount(count+1) ;
  }


  return (
    <>
     {/* <h1 className='text-3xl text-yellow-300 bg-green-500 p-3 rounded-md' onClick={addVal}>
         This is working : {count} </h1> */}

    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=> setColor('green')} className='outline-none px-4 py-1 rounded-full shadow-log text-black bg-green-600'>
              Green
            </button> 
            <button onClick={()=> setColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-log text-black bg-blue-700'>
              Blue
            </button> 
            <button onClick={()=> setColor('magenta')} className='outline-none px-4 py-1 rounded-full shadow-log text-black bg-violet-400'>
              Magenta
            </button> 
            <button onClick={()=> setColor('red')} className='outline-none px-4 py-1 rounded-full shadow-log text-black bg-red-600'>
              Red
            </button> 


         </div>

       </div>
    </div>
    </>
  )
}

export default App
