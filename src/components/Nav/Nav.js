import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
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
      <Link to={'/'}>ABOUT ME</Link>
      <Link to={'experience'}>PORTFOLIO</Link>
    </nav>
  );
};

export default Nav;
