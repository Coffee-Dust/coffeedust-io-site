import logo from './logo.svg';
import './App.css';
import NavMenu from '../components/NavMenu';
import { Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <NavMenu />
      </div>
    </Router>
  );
}

export default App;
