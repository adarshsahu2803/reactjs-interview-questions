import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name + email + message)
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <form className='contact-form' onSubmit={(e) => { handleSubmit(e) }}>
        <input
          type='text'
          placeholder='Enter your name'
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
        />
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
        />
        <textarea
          type='text'
          rows={4}
          cols={5}
          placeholder='Enter your message'
          value={message}
          onChange={e => {
            setMessage(e.target.value)
          }}
        />
        <button type='submit'>
          Send
        </button>
      </form>
    </div>
  )
}

export default App
