import React, { useState } from 'react';

const Contact = () => {
    const [contactForm, setContactForm] = useState({
        'name': '',
        'text': ''
    })

    function handleChange(event) {
        setContactForm((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='name'
                id='name'
                placeholder='Enter Name'
                value={contactForm.name}
                onChange={handleChange}
            />

            <p>Name: {contactForm.name}</p>
        </form>
    )
}

export default Contact