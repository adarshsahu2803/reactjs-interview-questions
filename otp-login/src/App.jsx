import React, { useState } from 'react';
import './App.css'
import EnterOTP from './components/EnterOTP'

function App() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [displayOTP, setDisplayOTP] = useState(false)

  const handleInputChange = (event) => {
    setPhoneNumber(event.target.value);
    console.log(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // handle phone number validation
    if (phoneNumber.length >= 10) {
      setDisplayOTP(true);
    }
    else {
      alert("Enter valid phone number.");
      return;
    }

    // alert("Form submission successful.")
  }

  return (
    <div className='heading'>
      Log in or sign up to continue
      {
        !displayOTP ?
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Enter phone number'
              value={phoneNumber}
              onChange={handleInputChange}
            />
            <button type='submit'>
              Submit
            </button>
          </form>
          :
          <EnterOTP number={phoneNumber} length={4} />
      }
    </div>
  );
}

export default App;