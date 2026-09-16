import React from 'react'
import './skill.css'
import ReactIcon from '../../Images/reacticon.png'
import ReactNative from '../../Images/reacticon.png'
import NextJS from '../../Images/nextjsicon.png'
import HTML from '../../Images/HTMLicon.png'
import CSS from '../../Images/CSSicon.png'
import JavaScript from '../../Images/JavaScripticon.png'
import NodeJS from '../../Images/nodejsicon.png'
import Express from '../../Images/expressicons.jpg'
import MongoDB from '../../Images/mongodbicon.png'
import MySQL from '../../Images/mysqlicon.png'
import Python from '../../Images/pythonicon.png'
import Java from '../../Images/javaicon.png'
import OpenAI from '../../Images/openaiicon.png'
import CV from '../../Images/computervisionicon.png'
import GitHub from '../../Images/githubicon.jpg'
import Git from '../../Images/giticon.png'
import Docker from '../../Images/dockericon.png'
import VSCode from '../../Images/vscodeicon.png'
import Postman from '../../Images/postmanicon.png'
import { FaCog } from 'react-icons/fa';

function skill() {
    return (
        <>
            <div className="mainskill">
                <FaCog />
                <h2>Skills</h2>
                <div className="skillitems">
                    <div className="skillfront">
                        <h3>Frontend</h3>
                        <div className="frontreact">
                            <img src={ReactIcon} alt="ReactIcon" />
                            <p>React</p>
                        </div>
                        <div className="frontreactnative">
                            <img src={ReactNative} alt="ReactNativeIcon" />
                            <p>React Native</p>
                        </div>
                        <div className="frontnext">
                            <img src={NextJS} alt="NextJS" />
                            <p>Next.js</p>
                        </div>
                        <div className="fronthtml">
                            <img src={HTML} alt="HTML" />
                            <p>HTML</p>
                        </div>
                        <div className="frontcss">
                            <img src={CSS} alt="CSS" />
                            <p>CSS</p>
                        </div>
                        <div className="frontjavascript">
                            <img src={JavaScript} alt="JavaScript" />
                            <p>Java Script</p>
                        </div>
                    </div>
                    <div className="skillback">
                        <h3>Backend & Database</h3>
                        <div className="backnode">
                            <img src={NodeJS} alt="NodeJS" />
                            <p>Node.js</p>
                        </div>
                        <div className="backexpress">
                            <img src={Express} alt="Express" />
                            <p>Express</p>
                        </div>
                        <div className="backmongo">
                            <img src={MongoDB} alt="MongoDB" />
                            <p>MongoDB</p>
                        </div>
                        <div className="backsql">
                            <img src={MySQL} alt="MySQL" />
                            <p>MySQL</p>
                        </div>
                    </div>
                    <div className="skillprogram">
                        <h3>Programming Languages</h3>
                        <div className="propython">
                            <img src={Python} alt="Python" />
                            <p>Python</p>
                        </div>
                        <div className="projava">
                            <img src={Java} alt="Java" />
                            <p>Java</p>
                        </div>
                    </div>
                    <div className="skillai">
                        <h3>AI / ML</h3>
                        <div className="aiopen">
                            <img src={OpenAI} alt="OpenAI" />
                            <p>OpenAI</p>
                        </div>
                        <div className="aicv">
                            <img src={CV} alt="CV" />
                            <p>Computer Vision</p>
                        </div>
                    </div>
                    <div className="tools">
                        <h3>Tools & Others</h3>
                        <div className="toolgithub">
                            <img src={GitHub} alt="Github" />
                            <p>GitHub</p>
                        </div>
                        <div className="toolgit">
                            <img src={Git} alt="Git" />
                            <p>Git</p>
                        </div>
                        <div className="tooldocker">
                            <img src={Docker} alt="Docker" />
                            <p>Docker</p>
                        </div>
                        <div className="toolvs">
                            <img src={VSCode} alt="VSCode" />
                            <p>VS Code</p>
                        </div>
                        <div className="toolpost">
                            <img src={Postman} alt="Postman" />
                            <p>Postman</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default skill
