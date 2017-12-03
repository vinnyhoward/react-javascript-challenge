import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      value: []
    }
    this.addCombine = this.addCombine.bind(this);
  }

  addCombine(text) {
    let value = this.state.value.slice()
    value.push({
      id: this.state.id,
      text: text
    })
    this.setState({
      value: value,
      id: ++this.state.id
    })
   console.log('hi', value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='input'>  
        <Input
        addCombine={this.addCombine}
        ></Input>
        </div>
      </div>
    );
  }
}

export default App;
