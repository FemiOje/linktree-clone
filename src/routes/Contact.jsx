import React, { useState } from "react";

const Contact = () => {
    const [contactForm, setContactForm] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            isProvidingData: false
        }
    )

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setContactForm((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <main id="contact-page">
            <h1>Contact Me</h1>

            <p>Hi there, contact me to ask me about anything you have in mind.</p>

            <form id="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName"></label>
                <input
                    type="text"
                    name="firstName"
                    id="firstNname"
                    placeholder="Enter your first name"
                    value={contactForm.firstName}
                    onChange={handleChange}
                />
                <br/>

                <label htmlFor="lastName"></label>
                <input
                    type="text"
                    name="lastName"
                    id="lastNname"
                    placeholder="Enter your last name"
                    value={contactForm.lastName}
                    onChange={handleChange}
                />
                <br/>

                <label htmlFor="email"></label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="yourname@email.com"
                    value={contactForm.email}
                    onChange={handleChange}
                />
                <br/>

                <label htmlFor="message"></label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                    value={contactForm.message}
                    onChange={handleChange}
                />
                <br/>

                <input
                    type="checkbox"
                    name="isProvidingData"
                    id="isProvidingData"
                    checked={contactForm.isProvidingData}
                    onChange={handleChange}
                />
                <label htmlFor="isProvidingData">
                    You agree to providing your data to Oluwafemi Ojetokun, who may contact you.
                </label>
                <br/>

                <button type="submit" className="submit-button">Send message</button>

            </form>








        </main>
    )
}

export default Contact