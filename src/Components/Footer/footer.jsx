import React from 'react'
import './footer.css'
import FooterImage from '../../Images/portfolio K image.png'
import { FaRegCopyright } from 'react-icons/fa'

function footer() {
    return (
        <>
            <div className="mainfooter">
                <div className="footer1">
                    <img src={FooterImage} alt="footer" />
                </div>
                <div className="footer2">
                    <FaRegCopyright />
                    <p>2026 Keshan Kulasekara. All Rights Reserved.</p>
                </div>
                <div className="footer3">
                    <li>Code</li>
                    <li>Build</li>
                    <li>Innovate</li>
                </div>
            </div>
        </>
    )
}

export default footer
