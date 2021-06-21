import React from 'react';
import {Link} from "react-router-dom"

function NavMenu() {
  return (
    <div className="App-nav-menu">
      <nav>
        <Link to="/about">about me</Link>
        
      </nav>
    </div>
  );
}

export default NavMenu;
