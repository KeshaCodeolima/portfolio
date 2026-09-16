import React from 'react'
import './service.css'
import WebIcon from '../../Images/servicewebicon.png'
import ECommerce from '../../Images/servicecarticon.png'
import Mobile from '../../Images/servicemobileicon.png'
import AI from '../../Images/serviceAIicon.png'
import API from '../../Images/serviceAPIicon.png'
import Consultation from '../../Images/serviceconsultationicon.png'
import { FaCode } from 'react-icons/fa'

function service() {
    return (
        <>
            <div className="mainservice">
                <div className="mainservice1">
                    <FaCode />
                    <h2>Services</h2>
                </div>
                <div className="mainservice2">
                    <div className="service1">
                        <img src={WebIcon} alt="web icon" />
                        <p>
                            <span>Website Development</span>
                            Modern, responsive and user-friendly websites built to meet your business needs.
                        </p>
                    </div>
                    <div className="service2">
                        <img src={ECommerce} alt="e-commerce icon" />
                        <p>
                            <span>E-Commerce Development</span>
                            Scalable e-commerce websites with product management, shopping carts and API integrations.
                        </p>
                    </div>
                    <div className="service3">
                        <img src={Mobile} alt="mobile icon" />
                        <p>
                            <span>Mobile App Development</span>
                            Cross-platform mobile applications with modern interfaces and reliable functionality.
                        </p>
                    </div>
                    <div className="service4">
                        <img src={AI} alt="ai icon" />
                        <p>
                            <span>AI & Machine Learning</span>
                            AI-powered solutions including NLP and Computer Vision applications.
                        </p>
                    </div>
                    <div className="service5">
                        <img src={API} alt="api icon" />
                        <p>
                            <span>API & Database Development</span>
                            Secure and scalable REST APIs and database solutions for web applications.
                        </p>
                    </div>
                    <div className="service6">
                        <img src={Consultation} alt="consultation icon" />
                        <p>
                            <span>Consultation & Support</span>
                            Ongoing support and guidance.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default service
