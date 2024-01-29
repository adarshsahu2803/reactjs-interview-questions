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
    updateTime()
    return () => clearInterval(timer.current)
  }, [])

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
    <div className="text-white">
      <h1>{time}</h1>
      <div className='text-2xl'>
        <button onClick={() => updateTime}>Start</button>
      </div>
    </div>
  )
}

export default App
