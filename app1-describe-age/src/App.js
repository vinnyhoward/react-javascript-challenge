import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Describe Age</h1>
        </header>
        <p className="App-intro">
         <Input/>
        </p>
      </div>
    );
  }
}

export default App;
