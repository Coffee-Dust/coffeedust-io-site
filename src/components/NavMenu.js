import React from 'react';
import {NavLink} from "react-router-dom"
import logo from '../assets/logo.svg';
import SocialLinks from './SocialLinks';

function NavMenu(props) {

  const navRef = React.useRef()
  const calcScaleFactor = element=> {
    const scaleFactor = getComputedStyle(element.current).width.slice(0, 3) * 0.0065
    return `--scale-factor: ${(scaleFactor > 1.1) ? scaleFactor : 1.1};`
  }
  React.useEffect(_=> {
    navRef.current.style = calcScaleFactor(navRef)
    window.addEventListener('resize', _=> navRef.current.style = calcScaleFactor(navRef))
  },[])

  return (
    <div className="App-nav-menu opened">
      <img src={logo} className="App-logo" alt="logo" />
      <nav ref={navRef}>
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
