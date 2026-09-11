import './App.css';
import Navigation from './Components/Navigation/navigation';
import Home from './Components/Home/home';

function App() {
  return (
    <>
      <Navigation />
      <section id="home">
        <Home />
      </section>
    </>
  );
}

export default App;
