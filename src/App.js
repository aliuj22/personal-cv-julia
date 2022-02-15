import './App.scss';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';

function App() {
  const deployedProjects = [
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

  const notDeployedProjects = [
    {
      name: 'Hungry Monster',
      description:
        'Second project in Hyper Island and the first group one, a task was to create a website using date() constructor and localstorage() property, the rest was up to our creativity. We created a small game, where ',
      link: 'https://github.com/aliuj22/dream-team-halloween-quiz',
    },
    {
      name: 'Halloween Quiz',
      description:
        'Third project created in HI, as well a group one. We were tasked to create a website with a quiz, the only requirement was to use Google Firebase. We decided to make a Halloween movie quiz, where user answers a group of questions and based on the answers they get a proposition of a movie they should watch. ',
      link: 'https://github.com/aliuj22/dream-team-halloween-quiz',
    },
  ];

  return (
    <div className="App">
      <Nav />
      <Intro />
      <AboutMe />
      <Experience
        deployedProjects={deployedProjects}
        notDeployedProjects={notDeployedProjects}
      />
    </div>
  );
}

export default App;
