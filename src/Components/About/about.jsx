import React from 'react'
import './about.css'
import { FaBriefcase, FaGraduationCap, FaUser } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'

function about() {
    return (
        <>
            <div className="aboutmain">
                <FaUser />
                <h2>About Me</h2>
                <p>
                    I'm Keshan Kulasekara, a Software Engineer dased in Sri Lanka, I graduated from University of Westminster   with Second Upper Class in BEng(Hons) Software Engineering.
                    I have hands on experience in Full-Stack development, Mobile app development and AI solutions, I also run small software company (cigna22.com) where we build web applications, e-commerce platforms, chatbots and computer vision models.
                    In my free time, I enjoy exploring new techonologies, reading, traveling and spending time with family and friends.
                </p>
                <div className="abouticon">
                    <div className="aboutlocation">
                        <FaLocationPin />
                        <p>Kurunegala, Sri Lanka</p>
                    </div>
                    <div className="aboutstudy">
                        <FaGraduationCap />
                        <p>BEng(Hons)Software Engineer</p>
                    </div>
                    <div className="aboutwork">
                        <FaBriefcase />
                        <p>Founder (Cigna22)</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default about
