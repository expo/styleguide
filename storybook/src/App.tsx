import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ActivityIcon } from '@expo/styleguide'
import { ThemeProvider } from '@expo/styleguide';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <header className="App-header">
        <ActivityIcon size={48} fill={'white'} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
