import logo from './logo.svg';
import './App.css';
import Nav from './modules/nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rasinin Bamla
        </a>
      </header>
    </div>
  );
}

export default App;
