import './App.scss';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';

function App() {
  const projects = [
    {
      name: 'Klaudias Portfolio',
      description:
        'My first project for Hyper Island, a portfolio page I have created for my friend that is an artist. The only requirements for this project were to create something using html, css and javascript.',
      link: 'https://klaudia-portfolio.netlify.app',
    },
    {
      name: 'Nerd Invaders',
      description:
        'A group project created in Hyper Island, my team and I have been given a task to create a simple game using Phaser. We were inspired by classical space invaders game.',
      link: 'https://nerd-invaders.netlify.app',
    },
    {
      name: 'Radio Shuffler',
      description: `My first project made using React. A simple radio programme shuffler with data from Sveriges Radio API, user can choose either a random documentary or a music programme. The project was fist written in mostly javascript and later adapted to react. That's why the requirements for this project were to write code that's maintainable and readable`,
      link: 'https://radio-shuffler.netlify.app',
    },
  ];

  return (
    <div className="App">
      <Nav />
      <Intro />
      <AboutMe />
      <Experience projects={projects} />
    </div>
  );
}

export default App;
