import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      value: '',
      number: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.reduceMe = this.reduceMe.bind(this)
}

handleChange(event) {
  this.setState({
    value: event.target.value
  })
  console.log(this.state.value);
}

reduceMe = (x) => { var num = x.reduce((sum, amount) => sum * amount)
  this.setState({
    number: num
  })
}

  render() {
    console.log(this.state.number);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          {this.state.number}
        </header>
        <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handleChange }
        className='input-field'
        placeholder='Number'
         /> 
        <button 
        className="button-thing"
        onClick={() => this.reduceMe(this.state.value)}
         > Reduce Me </button>
      </div>
    );
  }
}

export default App;
