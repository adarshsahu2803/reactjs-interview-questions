import { useEffect, useCallback, useState, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [passLength, setPassLength] = useState(6)
  const [hasNumber, setHasNumber] = useState(false)
  const [hasChar, setHasChar] = useState(false)

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
      let pass = ''
      let str = 'abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYZ'

      if (hasNumber) str += '0123456789'
      if (hasChar) str += '!@#$%^&*()_+-=~'

      for (let i = 0; i < passLength; i++) {
        let c = Math.floor(str.length * Math.random() + 1) 
        pass += str.charAt(c)
      }

      setPassword(pass)

    }, [passLength, hasNumber, hasChar, setPassword])

    useEffect(() => {
      passwordGenerator()
    }, [passLength, hasNumber, hasChar, passwordGenerator])
    
    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0, 20)
      window.navigator.clipboard.writeText(password)
    }, [password])

  return (
    <div className='passGen bg-blue text-white'>
      <h1 className='passGen text-4xl text-cent'>Password Generator</h1>
      <div>
        <input
          type='text'
          value={password}
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard}>copy</button>
      </div>
      <div className='range-check'>
        <label>
          <input
            type='range'
            min={6}
            max={100}
            defaultValue={10}
            onChange={(e) => {setPassLength(e.target.value)}}
          />
          Length: {passLength}
        </label>
        <label>
          <input
            type='checkbox'
            defaultChecked={hasNumber}
            onClick={() => {
              setHasNumber((prev) => !prev)
            }}
          />
          Numbers
        </label>
        <label>
          <input
            type='checkbox'
            defaultChecked={hasChar}
            onClick={() => {
              setHasChar((prev) => !prev)
            }}
          />
          Characters
        </label>
      </div>
    </div>
  )
}

export default App
