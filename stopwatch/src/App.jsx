import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  let timer = useRef();

  const updateTime = () => {
    timer.current = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 1000)
  }

  useEffect(() => {
    if (isRunning) {
      updateTime()
    } else {
      clearInterval(timer.current)
    }
    return () => clearInterval(timer.current)
  }, [isRunning])

  const startStopwatch = () => {
    setIsRunning(true)
  }

  const stopStopwatch = () => {
    setIsRunning(false)
  }

  const resetStopwatch = () => {
    setIsRunning(false)
    setTime(0)
  }

  return (
    <div className='text-2xl'>
      <h1>{time}</h1>
      <div>
        <button
          className='m-5 p-2 bg-blue-400 w-40 rounded hover:bg-blue-500'
          onClick={startStopwatch}>Start</button>
        <button
          className='m-5 p-2 bg-blue-400 w-40 rounded hover:bg-blue-500'
          onClick={stopStopwatch}>Pause</button>
      </div>
    </div>
  )
}

export default App
