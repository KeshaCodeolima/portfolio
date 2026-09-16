import React from 'react'
import './navigation.css'
import KImage from '../../Images/portfolio K image.png'

function navigation() {
    const downloadcv = () => {
        const link = document.createElement("a");
        link.href = "/Keshan Kulasekara CV.pdf";
        link.download = "/Keshan Kulasekara CV.pdf";
        link.click();
    }
    return (
        <>
            <div className="mainnav">
                <img src={KImage} alt="KImage" className='KImage' />
                <h2>Keshan Kulasekara</h2>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button onClick={downloadcv}>Download CV</button>
            </div>
        </>
    )
}

export default navigation
