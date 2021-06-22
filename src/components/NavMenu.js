import React from 'react';
import {NavLink} from "react-router-dom"

function NavMenu() {
  return (
    <div className="App-nav-menu">
      <nav>
        <NavLink to="/about">about me</NavLink>
        <NavLink to="/blog">my blog</NavLink>
        <NavLink to="/projects">my projects</NavLink>
        <NavLink to="/resume">my resume</NavLink>
      </nav>
    </div>
  );
}

export default NavMenu;
