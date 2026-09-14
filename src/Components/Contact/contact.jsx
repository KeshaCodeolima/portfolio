import React from 'react'
import './contact.css'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'

function contact() {
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
                <div className="maincontact3">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="text" placeholder='Subject' />
                    <textarea placeholder='Message' />
                    <button>Send Message</button>
                </div>
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

export default contact
