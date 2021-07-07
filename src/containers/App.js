import '../assets/css/App.css';
import '../assets/css/effects.css';
import NavMenu from '../components/NavMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu />
        <main className="App-content-container blur-backdrop">
          <Routes />
        </main>
        <h3 className="version-msg">public beta 2.0</h3>
      </div>
    </Router>
  );
}

export default App;
