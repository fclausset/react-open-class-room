import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColoredBlock from './ColoredBlock.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>My React App</h1>
          </header>
        <div className="main-content">
          <ColoredBlock />
        </div>
        <footer>...</footer>
      </div>
    );
  }
}

export default App;