import Link from '@mui/material/Link'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link
          className="underline blur-sm" // MUI component using tailwind css testing
          href="https://reactjs.org"
        >
          Learn React
        </Link>
      </header>
    </div>
  );
}

export default App;
