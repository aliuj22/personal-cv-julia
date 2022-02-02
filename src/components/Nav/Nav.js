import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav id="navigation">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.linkedin.com/in/julia-wos99/"
        id="logo"
      >
        JULIA WOŚ
      </a>
      <a href="#about">ABOUT ME</a>
      <a href="#experience">PORTFOLIO</a>
    </nav>
  );
};

export default Nav;
