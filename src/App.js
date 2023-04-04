import logo from './logo.svg';
import './App.css';
import './firebase.js'
import { gettoken } from './firebase.js';

function App() {
  const tok=gettoken();
  console.log(tok);
  return (
    <div className="App">
      <header className="App-header">
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
       {tok}
        </a>
      </header>
    </div>
  );
}

export default App;
