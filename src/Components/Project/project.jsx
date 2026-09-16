import React from 'react'
import './project.css'
import Git from '../../Images/githubicon.jpg'
import SmartLearning from '../../Images/thumbnail smart learing web.png'
import Cigna22 from '../../Images/cigna22.jpeg'
import Protfolio from '../../Images/protfolio.png'
import Project from '../../Images/projecticon.jpg'

function project() {
  return (
    <>
      <div className="mainproject">
        <div className="featproject">
          <img src={Project} alt="Project Icon" />
          <h2>Projects</h2>

          <div className="project1">
            <img src={SmartLearning} alt="Smart Learning" />
            <h4>Smart Learning Web</h4>
            <p>Full Stack Smart Learning Website with Computer Vision, User authentication and Quiz creation.</p>
            <p>React Node.js Python Express MongoDB</p>
            <a href="https://youtu.be/gcZQKWI0JGQ"><button className='livedemo'>Live Demo</button></a>
            <div className="gitbutton">
              <img src={Git} alt="Giticon" />
              <a href="https://github.com/KeshaCodeolima/smart-learning-web-app-frontend"><button className='git'>GitHub</button></a>
            </div>
          </div>

          <div className="project2">
            <img src={Cigna22} alt="cigna22" />
            <h4>Cigna Protfolio</h4>
            <p>Create the Protfolio Website with About, Projects, Contact and Service Pages.</p>
            <p>React HTML CSS</p>
            <a href="https://cigna22.com/"><button className='livedemo'>Live Demo</button></a>
            <div className="gitbutton">
              <img src={Git} alt="Giticon" />
              <a href="https://github.com/Cigna22/cigna-web"><button className='git'>GitHub</button></a>
            </div>
          </div>
          <div className="project3">
            <img src={Protfolio} alt="Protfolio" />
            <h4>Personal Protfolio</h4>
            <p>Create the Protfolio Website with Home, About, Projects, Skill, and Contact Pages.</p>
            <p>React HTML CSS Responsive</p>
             <a href="#home"><button className='livedemo'>Live Demo</button></a>
            <div className="gitbutton">
              <img src={Git} alt="Giticon" />
              <a href="https://github.com/KeshaCodeolima/portfolio"><button className='git'>GitHub</button></a>
            </div>
          </div>
          <a href="https://github.com/KeshaCodeolima?tab=repositories">View All Projects</a>
        </div>
      </div>
    </>
  )
}

export default project
