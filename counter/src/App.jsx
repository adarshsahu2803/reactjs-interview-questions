import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (e) => {
    e.preventDefault()

    setCount(prev => prev + 1)
    console.log(count)
  }

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={e => handleClick(e)}>{count}</button>
    </div>

  )
}

export default App
