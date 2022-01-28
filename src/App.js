import './App.scss';
import AboutMe from './components/AboutMe/AboutMe';
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <AboutMe />
    </div>
  );
}

export default App;
