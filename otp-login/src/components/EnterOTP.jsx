import React, { useRef } from 'react'
import '../App.css'
import { useState } from 'react'

function EnterOTP({ number = '', otpLength = 3 }) {
  const [otpInput, setOtpInput] = useState('')
  const refsArray = Array.from({ length: otpLength }, () => useRef());

  const handleSubmit = (event) => {
    event.preventDefault();

    let concatenatedOtp = '';

    for (var i = 0; i < otpLength; i++) {
      concatenatedOtp += refsArray[i].current.value;
    }

    // Update the state once after the loop
    setOtpInput(concatenatedOtp);

    if (concatenatedOtp.length === otpLength) {
      alert("Login successful.")
    }
  }

  const handleInputChange = (index, value) => {
    console.log(index, value)

    // Move focus to last input field
    if (value.length == 0) {
      if (index != 0) {
        refsArray[index - 1].current.focus();
      }
    }

    // Move focus to the next input field
    if (index < otpLength - 1 && value.length > 0) {
      setOtpInput(otpInput + value);
      refsArray[index + 1].current.focus();
    }

    setOtpInput(value);
  }



  return (
    <>
      <h4>{`OTP is sent to ${number}`}</h4>
      <form onSubmit={handleSubmit}>
        <div className='input-field'>
          {refsArray.map((ref, index) => (
            <input
              key={index}
              type='text'
              ref={ref}
              className='otp-input'
              onChange={(e) =>
                handleInputChange(index, e.target.value)}
              maxLength={1}
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