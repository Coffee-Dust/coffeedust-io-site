import React from 'react';
import {NavLink} from "react-router-dom"
import logo from '../assets/logo.svg';
import SocialLinks from './SocialLinks';

function NavMenu() {
  return (
    <div className="App-nav-menu">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <NavLink to="/about">about me</NavLink>
        <NavLink to="/blog">blog</NavLink>
        <NavLink to="/projects">projects</NavLink>
        <NavLink to="/resume">resume</NavLink>
      </nav>
      <SocialLinks />
    </div>
  );
}

export default NavMenu;
