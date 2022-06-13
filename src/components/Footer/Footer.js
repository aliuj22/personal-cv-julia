import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Are you interested in seeing more of my projects? Contact me! </h2>
      </div>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.linkedin.com/in/julia-wos99/"
        aria-label="liknedin profile"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/aliuj22"
        aria-label="github profile"
      >
        <i className="fab fa-github-square"></i>
      </a>
      <a href="mailto:julia.wos@hyperisland.se" aria-label="Mail">
        {' '}
        <i className="fas fa-solid fa-envelope"></i>
      </a>
    </footer>
  );
};

export default Footer;
