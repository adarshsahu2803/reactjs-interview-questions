import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  let timer = useRef();
  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const [hour, setHour] = useState(0)

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

  useEffect(() => {
    const formatTime = () => {
      hour = time / 60 / 60
      min = time.current / 60 % 60
      sec = time.current % 60
    }
     
    return (() => {

    })
  })

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
      <h1>{Math.floor (time / 60 / 60)} : {Math.floor (time / 60 % 60)} : {time % 60}</h1>
      <div>
        <button
          className='m-5 p-2 bg-blue-400 w-40 rounded hover:bg-blue-500 text-white'
          onClick={startStopwatch}>Start</button>
        <button
          className='m-5 p-2 bg-blue-400 w-40 rounded hover:bg-blue-500 text-white'
          onClick={stopStopwatch}>Pause</button>
        <button
          className='m-5 p-2 bg-blue-400 w-40 rounded hover:bg-blue-500 text-white'
          onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  )
}

export default App
