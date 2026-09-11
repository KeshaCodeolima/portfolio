import './App.css';
import Navigation from './Components/Navigation/navigation';
import Home from './Components/Home/home';
import About from './Components/About/about';

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
    </>
  );
}

export default App;
