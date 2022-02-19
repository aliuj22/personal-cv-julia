import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
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
        <i className="fab fa-github-square"></i>
      </a>
      <a href="mailto:julia.wos@hyperisland.se">
        {' '}
        <i class="fas fa-solid fa-envelope"></i>
      </a>
    </footer>
  );
};

export default Footer;
