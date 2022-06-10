import './App.scss';
import hallGif from './img/GIF-final-halloween.gif';
import dinoGif from './img/GIF-dino.gif';
import uxGif from './img/GIF-ux.gif';
import klaudiaImg from './img/klaudia.png';
import invadersImg from './img/invaders.png';
import shufflerImg from './img/shuffler.png';
import shopGif from './img/GIF-shop.gif';
import phaser from './img/phaser.png';

import { Experience, Nav, Footer } from './components';
import Home from './pages/home';
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoNodejs,
} from 'react-icons/io5';
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMocha,
  SiChai,
  SiFigma,
  SiFirebase,
} from 'react-icons/si';

function App() {
  console.log(
    '%c Well Hello There!',
    'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%'
  );

  // //gifs: use canva
  const deployedProjects = [
    {
      name: 'Skateboard Shop',
      description: `E-commerce platform built in agile teams. Part of Code & Collaborate module at HI, course duration: 5 weeks. The goal was to focus on working as a team following agile methodologies and learn how to successfully collaborate. My team and I had daily check-ins, code reviews, a weekly scrum master (a person in charge of making shure we follow scrum methodologies, a facilitator/coach) and sprint reviews. We mostly worked with pair and mob programming and implemented some TDD and basic encryption for the login function. My biggest learnings include working with MERN stack, NextJS, Mocha and Chai for backend testing, backend folder structure, mobile first design and working in sprints with a scrum master. `,
      tech: (
        <>
          <SiNextdotjs className="projectIcons" />
          <IoLogoNodejs className="projectIcons" />
          <SiExpress className="projectIcons" />
          <SiMongodb className="projectIcons" />
          <SiMocha className="projectIcons" />
          <SiChai className="projectIcons" />
        </>
      ),
      link: 'https://github.com/aliuj22/code_collaborate_shop',
      link2:
        'https://github.com/aliuj22/code_collaborate_shop_server/tree/master/src',
      gif: (
        <a
          className="gif-container"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/aliuj22/code_collaborate_shop"
        >
          {' '}
          <img src={shopGif} alt="gif of the skateboard shop" className="gif" />
        </a>
      ),
    },
    {
      name: 'Redesign of the B2B side of the website for DocLounge.',
      description: `This project was a part of a Learning Partnership with DocLounge as a client and Design For The User module, course duration: 6 weeks. The brief was to redesign DocLounges website to make it more user friendly, visually appealing and promote their brand and activities. Big part of this project was user resarch, building a persona, working in agile ways and focusing on user experience which I've gained a lot of knowledge about. I've also learned how to effectively work in remote teams, since my team and I worked from home during this project, designing in Figma, working in sprints and with clients.`,
      tech: (
        <>
          <SiFigma className="projectIcons" />
        </>
      ),
      link: 'https://www.figma.com/proto/3OGjsblPAipdEqK40UovFg/DocLounge-B2B-wireframing-and-prototyping?node-id=91%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=91%3A2',
      gif: (
        <a
          className="gif-container"
          target="_blank"
          rel="noreferrer"
          href="https://www.figma.com/proto/3OGjsblPAipdEqK40UovFg/DocLounge-B2B-wireframing-and-prototyping?node-id=91%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=91%3A2"
        >
          {' '}
          <img src={uxGif} alt="gif of the doclounge website" className="gif" />
        </a>
      ),
    },
    {
      name: 'Nerd Invaders',
      description: `A group project created in Hyper Island during game design oriented module, course duration: 4 weeks. We have been given a task to create a simple game using Phaser3 framework. We were inspired by classical space invaders game. My biggest learnings from this project were getting deeper understanding of working with JavaScript, working as a team and importance of daily check-ins with teammates, game design principles. `,
      tech: (
        <>
          <img src={phaser} alt="" />
          <IoLogoJavascript className="projectIcons" />
          <IoLogoHtml5 className="projectIcons" />
          <IoLogoCss3 className="projectIcons" />
        </>
      ),
      link: 'https://nerd-invaders.netlify.app',
      gif: (
        <>
          <a
            className="gif-container"
            target="_blank"
            rel="noreferrer"
            href="https://nerd-invaders.netlify.app"
          >
            <img
              src={invadersImg}
              alt="screenshot of games starting page"
              className="gif projectImg"
            />
          </a>
          <p id="desktopOnly">[Desktop Only]</p>
        </>
      ),
    },

    {
      name: `Klaudia's Portfolio`,
      description: `My first project for Hyper Island, part of Fundamentals module, course duration: 6 weeks. A portfolio page for my friend that is an artist. My biggest challenge during this project was learning JavaScript, since at the start of the course I practically didn't know any, so I've spent a big portion of time on watching online tutorials and get better grasp of it. Implementing responsiveness, achieving good performance with many images and learning flexbox were another big learnings. `,
      tech: (
        <>
          {' '}
          <IoLogoJavascript className="projectIcons" />
          <IoLogoHtml5 className="projectIcons" />
          <IoLogoCss3 className="projectIcons" />
        </>
      ),
      link: 'https://klaudia-portfolio.netlify.app',
      gif: (
        <a
          className="gif-container"
          target="_blank"
          rel="noreferrer"
          href="https://klaudia-portfolio.netlify.app"
        >
          {' '}
          <img
            src={klaudiaImg}
            alt="screenshot of Klaudias website home page"
            className="gif projectImg"
          />
        </a>
      ),
    },
    // {
    //   name: 'Radio Shuffler',
    //   description: `My first project made using React. A simple radio programme shuffler with data from Sveriges Radio API. A user can choose either a random documentary or a music programme. The project was fist written in JavaScript and later adapted to React. That's why the requirements for this project were to write code that's maintainable and readable to make it easier to later convert it to React. During this project I've furthered my knowledge in JavaScript and have learned a great deal about React. Since this project spanned over Christmas break, I also got to improve my time management skills, motivation and persistence.`,
    //   tech: (
    //     <>
    //       <IoLogoReact className="projectIcons" />
    //       <IoLogoJavascript className="projectIcons" />
    //       <IoLogoHtml5 className="projectIcons" />
    //       <IoLogoCss3 className="projectIcons" />
    //     </>
    //   ),
    //   link: 'https://radio-shuffler.netlify.app',
    //   gif: (
    //     <a
    //       className="gif-container"
    //       target="_blank"
    //       rel="noreferrer"
    //       href="https://radio-shuffler.netlify.app"
    //     >
    //       {' '}
    //       <img
    //         src={shufflerImg}
    //         alt="screenshot of Radio Shufflers the starting page "
    //         className="gif projectImg"
    //       />
    //     </a>
    //   ),
    // },

    // {
    //   name: 'Hungry Monster',
    //   description: `Second project in Hyper Island and the first group one, the task was to create a website using date() constructor and localstorage() property, the rest was up to our creativity. We created a small game, where you have to feed a pink dino so it doesn't starve, and when you do a randomised message pops up and dinos facial expression changes. In local storage we stored the information of the time that the game was started or how much food the dino needs. We wanted to mostly focus on learnings, thus the simplicity of it. Since it was our first group project, I've learned a great deal about collaboration,git and github as well as pair coding.`,
    //   tech: (
    //     <>
    //       <IoLogoJavascript className="projectIcons" />
    //       <IoLogoHtml5 className="projectIcons" />
    //       <IoLogoCss3 className="projectIcons" />
    //     </>
    //   ),
    //   link: 'https://egiiiiil.github.io/dinogotchi/',
    //   gif: (
    //     <a
    //       className="gif-container"
    //       target="_blank"
    //       rel="noreferrer"
    //       href="https://egiiiiil.github.io/dinogotchi/"
    //     >
    //       {' '}
    //       <img
    //         src={dinoGif}
    //         alt="gif of the hungry monster website"
    //         className="gif"
    //       />
    //     </a>
    //   ),
    // },
    // {
    //   name: 'Halloween Quiz',
    //   description: `Third project created in HI. We were tasked to create a website with a quiz, the only requirement was to use Google Firebase. We decided to make a Halloween movie quiz, where user answers a group of questions and based on the answers they get a suggestion of a movie they should watch. We stored the users name in the firebase. During this project I've learned how firebase and apis work(we did a lot of research on them but in the end we settled with storing data we needed in a json file instead of using an api), how to use Liveshare and how to paircode as well as agile methods of working(kanban).`,

    //   tech: (
    //     <>
    //       <IoLogoJavascript className="projectIcons" />
    //       <IoLogoHtml5 className="projectIcons" />
    //       <IoLogoCss3 className="projectIcons" />
    //       <SiFirebase className="projectIcons" />
    //     </>
    //   ),
    //   link: 'https://github.com/aliuj22/dream-team-halloween-quiz',
    //   gif: (
    //     <a
    //       className="gif-container"
    //       target="_blank"
    //       rel="noreferrer"
    //       href="https://github.com/aliuj22/dream-team-halloween-quiz"
    //     >
    //       {' '}
    //       <img
    //         src={hallGif}
    //         alt="gif of the halloween quiz website"
    //         className="gif"
    //       />
    //     </a>
    //   ),
    // },
  ];

  return (
    <div className="App">
      <Nav />
      <Home />
      <Experience deployedProjects={deployedProjects} />
      <Footer />
    </div>
  );
}

export default App;
