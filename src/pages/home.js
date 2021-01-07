import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

export default function Home() {
  return (
    <div>
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
          Learn React
        </a>
        <Link className="App-link" target="_blank" to="/test">
          go to test
        </Link>
        <Link className="App-link" to="/radio_grid">
          go to radio grid
        </Link>
      </header>
    </div>
  );
}
