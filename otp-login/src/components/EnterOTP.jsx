import React from 'react'
import '../App.css'

function EnterOTP({ number = '', length = 3 }) {
  return (
    <>
      <h4>{`OTP is sent to ${number}`}</h4>
      <form onSubmit={() => { }}>
        <div className='input-field'>
          {[...Array(length)].map((_, index) => (
            <input
              type='text'
              className='otp-input'
            />
          ))}
        </div>
        <button type='submit'>
          Submit
        </button>
      </form>
    </>
  )
}

export default EnterOTP