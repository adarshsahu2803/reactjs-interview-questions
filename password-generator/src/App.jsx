import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [password, setPassword] = useState('')
  const [passLength, setPassLength] = useState(6)
  const [hasNumber, setHasNumber] = useState(false)
  const [hasChar, setHasChar] = useState(false)

  return (
    <div className='passGen bg-blue text-white'>
      <h1 className='passGen text-4xl text-cent'>Password Generator</h1>
      <div>
        <input
          type='text'
          value={"a;dkfjadhjhf3sdf443"}
          readOnly
        />
        <button>copy</button>
      </div>
      <div className='range-check'>
        <label>
          <input
            type='range'
            min={6}
            max={100}
            defaultValue={10}
          />
          Length: 10
        </label>
        <label>
          <input
            type='checkbox'
          />
          Numbers
        </label>
        <label>
          <input
            type='checkbox'
          />
          Characters
        </label>
      </div>
    </div>
  )
}

export default App
