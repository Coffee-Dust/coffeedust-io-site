import logo from '../assets/logo.svg';
import '../assets/css/App.css';
import '../assets/css/effects.css';
import NavMenu from '../components/NavMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <NavMenu />
        <main className="App-content-container blur-backdrop">
          <Routes />
        </main>
      </div>
    </Router>
  );
}

export default App;
