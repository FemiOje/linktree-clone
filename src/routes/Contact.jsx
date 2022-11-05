import React, { useState } from "react";
import "../App.css";
import Footer from "../components/Footer";

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
        <>
            <main id="contact-page">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
                <br />
                <br />

                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="names-grid">
                        <div className="first-name">
                            <label htmlFor="first_name">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                id="first_name"
                                placeholder="Enter your first name"
                                value={contactForm.firstName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="last-name">
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                id="last_name"
                                placeholder="Enter your last name"
                                value={contactForm.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="yourname@email.com"
                        value={contactForm.email}
                        onChange={handleChange}
                    />
                    <br />

                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        value={contactForm.message}
                        onChange={handleChange}
                    />
                    <br />
                    <br />

                    <label htmlFor="isProvidingData">
                        <input
                            type="checkbox"
                            name="isProvidingData"
                            id="isProvidingData"
                            checked={contactForm.isProvidingData}
                            onChange={handleChange}
                        />
                        <span>
                            You agree to providing your data to Oluwafemi Ojetokun, who may contact you.
                        </span>
                    </label>

                    <button 
                    type="submit" 
                    id="btn__submit"
                    className="send-message"
                    >
                        Send message
                    </button>

                </form>


            </main>

            <Footer />
        </>
    )
}

export default Contact