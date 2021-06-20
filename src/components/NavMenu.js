import React from 'react';
import {Link} from "react-router-dom"

function NavMenu() {
  return (
    <div className="App-nav-menu">
      <nav>
        <ul>
          <li>
            <Link to="/about">about me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavMenu;
