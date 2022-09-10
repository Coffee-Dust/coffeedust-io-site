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

  const onNavClick = event=> {
    document.querySelector(".App-content-container").scrollTo({top: 0})
    props.toggleMenu(event)
  }

  return (
    <div className="App-nav-menu">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="Mobile-open-menu" onClick={props.toggleMenu}><span>menu</span></div>
      <nav ref={navRef}>
        <NavLink to="/about" onClick={onNavClick}>about me</NavLink>
        <NavLink to="/projects" onClick={onNavClick}>projects</NavLink>
        <NavLink to="/blog" onClick={onNavClick}>blog</NavLink>
        <NavLink to="/resume" onClick={onNavClick}>resumé</NavLink>
      </nav>
      <SocialLinks />
    </div>
  );
}

export default NavMenu;
