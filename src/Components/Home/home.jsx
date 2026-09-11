import React from 'react'
import './home.css'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import HomeImage from '../../Images/Home page Image.png'

function home() {
    return (
        <>
            <div className="homemain">
                <div className="homemainleft">
                    <div className="homepara">
                        <p>Hi, I'm</p>
                        <h2>Keshan Kulasekara</h2>
                        <h3>Software Engineer & AI Developer</h3>
                        <p className="description">
                            I build modern web and mobile applications, work with AI
                            and Machine Learning, and love turning ideas into real
                            solutions. Passionate about problem solving, innovation
                            and creating technology that makes a difference.
                        </p>
                    </div>
                    <div className="homebutton">
                        <button><a href="#projects">View Projects</a></button>
                        <button><a href="#contact">Contact Me </a></button>
                    </div>
                    <div className="homeicon">
                        <a href="https://github.com/KeshaCodeolima?tab=repositories" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://cigna22.com/" target="_blank" rel="noreferrer">
                            <FaGlobe />
                        </a>
                    </div>
                </div>
                <div className="homemainright">
                    <img src={HomeImage} alt="HomeImage" className='homeimage' />
                </div>
            </div>
        </>
    )
}

export default home
