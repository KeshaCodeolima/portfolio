import React, { useState } from 'react'
import './contact.css'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import emailjs from '@emailjs/browser'

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            },
            process.env.REACT_APP_PUBLIC_KEY
        )
            .then(() => {
                alert('Message sent successfully!')
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.error(error)
                alert('Failed to send message.')
            })
    }
    return (
        <>
            <div className="maincontact">
                <div className="maincontact1">
                    <FaEnvelope />
                    <h2>Contacts</h2>
                </div>
                <div className="maincontact2">
                    <h3>Lest's Work Together</h3>
                    <p>
                        Have a project in mind or just want to say hello?
                        Feel free to reach out!
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="maincontact3">
                        <input type="text" placeholder='Name'
                            name='name' value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input type="email" placeholder='Email'
                            name='email' value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input type="text" placeholder='Subject'
                            name='subject' value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea placeholder='Message' name='message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type='submit'>
                            Send Message
                        </button>

                    </div>
                </form>

                <div className="maincontact4">
                    <div className="contact41">
                        <FaEnvelope />
                        <p>kulasekarakeshan41@gmail.com</p>
                    </div>
                    <div className="contact42">
                        <FaLocationPin />
                        <p>Kurunegala, Sri Lanka</p>
                    </div>
                    <div className="contact42">
                        <FaPhone />
                        <p>+94 765858504</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
