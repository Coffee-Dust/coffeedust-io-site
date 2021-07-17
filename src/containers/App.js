import '../assets/css/App.css';
import '../assets/css/App/responsive.css';
import '../assets/css/effects.css';
import NavMenu from '../components/NavMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Routes';
import logo from '../assets/logo.svg';

function App() {

  const toggleMenu = event=> {
    if (event.currentTarget.parentNode.classList.contains("App-nav-menu")) {
      event.currentTarget.parentNode.classList.toggle("opened")
    } else {
      document.querySelector(".App-nav-menu").classList.remove("opened")
    }
  }
  
  return (
    <Router>
      <div className="App">
        <img src={logo} className="App-logo-static" alt="logo" />
        <NavMenu toggleMenu={toggleMenu} />
        <main className="App-content-container blur-backdrop" onClick={toggleMenu}>
          <Routes />
        </main>
        <h3 className="version-msg">public beta 2.0</h3>
      </div>
    </Router>
  );
}

export default App;
