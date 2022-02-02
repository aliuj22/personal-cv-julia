import React from 'react';
import julia from './julia.jpeg';
import './Intro.scss';

const Intro = () => {
  return (
    <div className="top-container">
      <img id="image-julia" src={julia} alt="Julia" />
      <p id="introduction">
        HI! <br /> I'M JULIA WOŚ, <br /> A FRONTEND DEVELOPER IN TRAINING <br />{' '}
        @ HYPER ISLAND
      </p>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.linkedin.com/in/julia-wos99/"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/aliuj22"
      >
        <i class="fab fa-github-square"></i>
      </a>
    </div>
  );
};
export default Intro;
