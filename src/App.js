import './App.scss';
import uxGif from './img/GIF-ux.mp4';
import uxWebM from './img/GIF-ux.webm';
import klaudiaImg from './img/klaudia.png';
import invadersImg from './img/invaders.png';
import shopGif from './img/GIF-shop.mp4';
import shopWebM from './img/GIF-shop.webm';
import phaser from './img/phaser.png';
/* eslint-disable */
import {
  DemoHome,
  DemoHomeMin,
  Dashboard,
  DashboardMin,
  Savings,
  SavingsMin,
  Transaction,
  TransactionMin,
  TransactionHistory,
  TransactionHistoryMin,
  Verify,
  VerifyMin,
} from './img/demo';

import { Experience, Nav, Footer } from './components';
import Home from './pages/home';
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoNodejs,
} from 'react-icons/io5';
import {
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMocha,
  SiChai,
  SiFigma,
  SiTypescript,
  SiRedux,
} from 'react-icons/si';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import ImageGallery from 'react-image-gallery';

function App() {
  console.log(
    '%c Well Hello There!',
    'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%'
  );
  const images = [
    {
      original: DemoHome,
      thumbnail: DemoHomeMin,
      originalWidth: 20,
    },
    {
      original: Dashboard,
      thumbnail: DashboardMin,
    },
    {
      original: Savings,
      thumbnail: SavingsMin,
    },
    {
      original: Transaction,
      thumbnail: TransactionMin,
    },
    {
      original: TransactionHistory,
      thumbnail: TransactionHistoryMin,
    },
    {
      original: Verify,
      thumbnail: VerifyMin,
    },
  ];

  const deployedProjects = [
    {
      name: 'Demo Corp',
      description: `Demo website for 12iD. My experience as a Fullstack Development Intern at 12iD has allowed me to develop and implement new features and design on a demo website showcasing the 12iD mobile app. During my time there, I successfully completed a full redesign, implemented new flows and features, and gained a deep understanding of the product. I also worked on fixing bugs and adding new features to an in-production admin portal.`,
      tech: (
        <>
          <SiReact className="projectIcons" />
          <SiRedux className="projectIcons" />
          <IoLogoNodejs className="projectIcons" />
          <SiExpress className="projectIcons" />
          <SiMongodb className="projectIcons" />
          <SiTypescript className="projectIcons" />
        </>
      ),

      gif: (
        <div className="gif-container">
          <ImageGallery
            additionalClass="gif"
            showPlayButton={false}
            items={images}
          />
        </div>
      ),
    },
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
        <div className="gif-container">
          <video controls muted className="gif">
            <source src={shopGif} type="video/mp4" />
            <source src={shopWebM} type="video/webm" />
          </video>
        </div>
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
        <div className="gif-container">
          <video controls muted className="gif">
            <source src={uxGif} type="video/mp4" />
            <source src={uxWebM} type="video/webm" />
          </video>
        </div>
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
