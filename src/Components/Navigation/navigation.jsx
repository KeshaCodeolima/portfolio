import React from 'react'
import './navigation.css'
import KImage from '../../Images/portfolio K image.png'

function navigation() {
    const downloadcv = ()=>{
        const link = document.createElement("a");
        link.href = "/Keshan Kulasekara CV.pdf";
        link.download ="/Keshan Kulasekara CV.pdf";
        link.click();
    }
    return (
        <>
            <div className="mainnav">
                <img src={KImage} alt="KImage" className='KImage' />
                <h2>Keshan Kulasekara</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Experience</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
                <button onClick={downloadcv}>Download CV</button>
            </div>
        </>
    )
}

export default navigation
