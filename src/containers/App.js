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
      document.querySelector(".App-nav-menu").classList.toggle("opened")
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
      </div>
    </Router>
  );
}

export default App;
