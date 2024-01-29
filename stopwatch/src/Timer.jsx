import React, { useEffect, useState, useRef } from 'react'

function Timer() {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    let timer = useRef(0)
    let inputVal = useRef()

    const handleClock = () => {
        timer.current = setInterval(() => {
            setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0))
        }, 1000)
    }

    useEffect(() => {
        if (isRunning) {
            handleClock()
        } else {
            clearInterval(timer.current)
        }

        return () => {
            clearInterval(timer.current)
        }
    }, [isRunning])


    const handleStart = () => {
        setIsRunning(true)
    }

    const handleReset = () => {
        setTime(0);
        setIsRunning(false)
        inputVal.current.value = ''
    }

    return (
        <div className='text-2xl'>
            <p>Timer</p>
            <p>{Math.floor (time / 60 % 60)} : {time % 60}</p>
            <input
                type='number'
                ref={inputVal}
                placeholder='Set Timer (sec)'
                className='bg-blue-200 rounded m-2 p-2 w-60'
                onChange={e => setTime(parseInt(e.target.value, 10) || 0)}
            />
            <button
                className='m-5 p-2 bg-blue-400 w-40 rounded hover:bg-blue-500 text-white'
                onClick={handleStart}
            >Start</button>
            <button
                className='m-5 p-2 bg-blue-400 w-40 rounded hover:bg-blue-500 text-white'
                onClick={handleReset}
            >Reset</button>

        </div>
    )
}

export default Timer