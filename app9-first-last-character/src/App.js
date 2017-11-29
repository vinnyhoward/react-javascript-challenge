import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
  super()
  this.state={
    value: '',
    numberInput: [],
  }
  this.removeFirstLast= this.removeFirstLast.bind(this);
  this.handleChange= this.handleChange.bind(this);
}

handleChange(event) {
  this.setState({
    value: event.target.value
  })
  console.log(event.target.value);
}

removeFirstLast(arr) {
var newString = arr.split('')
if(newString.length <= 2) {
    return null
  } else {
var splitEnd = newString.pop()
var splitFirst = newString.shift()
var newArray = newString.join(' ')
this.setState({
  numberInput: newArray
})
  }
}

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        {this.state.numberInput}
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
        onClick={() => this.removeFirstLast(this.state.value)}
         >Remove</button>
      </div>
    );
  }
}

export default App;
