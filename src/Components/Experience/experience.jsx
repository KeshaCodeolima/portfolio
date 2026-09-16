import React from 'react'
import './experience.css'
import { FaBriefcase } from 'react-icons/fa'

function experience() {
    return (
        <>
            <div className="mainexperience">
                <div className="mainexpe1">
                    <FaBriefcase />
                    <h2>Experience</h2>
                </div>
                <div className="mainexpe2">
                    <div className="expe1">
                        <span>2026 - Present</span>
                        <p>
                            <span>Founder & Software Engineer - Cigna22</span>
                            Developing Web Applications, E-Commerce Websites, AI Models.
                        </p>
                    </div>
                    <div className="expe2">
                        <span>2025 - Present</span>
                        <p>
                            <span>Software Developer - Freelance</span>
                            Developed Responsive Websites and Web Applications for Clients,
                            Implemented Custom Features, Integrated APIs and Databases, and
                            Provided Technical Support and Maintenance.
                        </p>
                    </div>
                    <div className="expe3">
                        <span>2025 - Present</span>
                        <p>
                            <span>AI & Machine Learning Developer</span>
                            Developed AI Based Solutions Including Computer Vision
                            Applications and NLP models, with Experience in Integrating AI
                            Technologies into Web Applications.
                        </p>
                    </div>
                    <div className="expe4">
                        <span>2023 - Present</span>
                        <p>
                            <span>Full-Stack Developer - Personal Projects</span>
                            Built Full-Stack Web Applications Using React, Node.js, Express
                            and MongoDB, with Experience in Authentication, REST APIs,
                            Database Management and Responsive UI Development.
                        </p>
                    </div>
                    <div className="expe4">
                        <span>2024 - 2025</span>
                        <p>
                            <span>Software Engineer Intern - CodeOlima</span>
                            Developed and Maintained Web Applications, Implemented Responsive UI Components,
                            Worked with REST APIs and Databases, Fixed Bugs, and Collaborated with The Team
                            to Deliver Software Solutions.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default experience
