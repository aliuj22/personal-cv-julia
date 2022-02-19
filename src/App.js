import './App.scss';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';
import hallGif from './GIF-final-halloween.gif';
import dinoGif from './GIF-dino.gif';

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
      description: `Second project in Hyper Island and the first group one, a task was to create a website using date() constructor and localstorage() property, the rest was up to our creativity. We created a small game, where you have to feed a pink dino so it doesn't starve, when you do a randomised message pops up and dinos facial expression changes. In local storage the information of the time game was started or how much food the dino needs was stored. We wanted to mostly focus on learnings, thus the simplicity of it. Since it was our first group project, I've learned a great deal about collaboration,git and github as well as pair coding.`,
      link: 'https://github.com/egiiiiil/dream-team-module-2',
      gif: (
        <a
          className="gif-container"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/egiiiiil/dream-team-module-2"
        >
          {' '}
          <img
            src={dinoGif}
            alt="gif of the hungry monster website"
            className="gif"
          />
        </a>
      ),
    },
    {
      name: 'Halloween Quiz',
      description: `Third project created in HI, as well a group one. We were tasked to create a website with a quiz, the only requirement was to use Google Firebase. We decided to make a Halloween movie quiz, where user answers a group of questions and based on the answers they get a proposition of a movie they should watch. We stored the users name in the firebase. During this project I've learned how to use Liveshare and how to paircode as well as agile methods working(kanban).`,
      link: 'https://github.com/aliuj22/dream-team-halloween-quiz',
      gif: (
        <a
          className="gif-container"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/aliuj22/dream-team-halloween-quiz"
        >
          {' '}
          <img
            src={hallGif}
            alt="gif of the halloween quiz website"
            className="gif"
          />
        </a>
      ),
    },
  ];

  return (
    <div className="App">
      <Nav />
      <Intro />
      <AboutMe />
      <Experience
        notDeployedProjects={notDeployedProjects}
        deployedProjects={deployedProjects}
      />

      <Footer />
    </div>
  );
}

export default App;
