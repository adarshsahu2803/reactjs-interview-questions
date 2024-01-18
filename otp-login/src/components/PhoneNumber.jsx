import React, { useState } from 'react'

function PhoneNumber() {
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleInputChange = (event) => {
        // manage input change
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle submit
    }

    return (
        <div>
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
        </div>
    )
}

export default PhoneNumber