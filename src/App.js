import './App.css';
import Navigation from './Components/Navigation/navigation';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Skill from './Components/Skill/skill';
import Project from './Components/Project/project';
import Experience from './Components/Experience/experience';
import Service from './Components/Service/service';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <>
      <Navigation />

      <section id="home">
        <Home />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='skills'>
        <Skill />
      </section>

      <section id='projects'>
        <Project />
      </section>

      <section id='experience'>
        <Experience />
      </section>

      <section id='service'>
        <Service />
      </section>

      <section id='contact'>
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
