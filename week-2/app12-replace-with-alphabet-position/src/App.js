import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      input: '',
      num: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.convertToNum = this.convertToNum.bind(this)
  }
handleChange(event) {
  this.setState({
    value: event.target.value
  })
}

convertToNum(text){
  var filteredText = text.replace(/\W/g, ' ')
  var split = filteredText.split('')
  var newArray = []
  for( var i = 0; i < split.length; i++) {
  if(split[i] === split[i].toUpperCase()){
    newArray.push(split[i].charCodeAt(0) - 64)
  } else if(split[i] === split[i].toLowerCase()){
    newArray.push(split[i].charCodeAt(0) - 96)
  }
  }
  var converted = newArray.filter(function(a){return a > 0 && a !== 31})
  var convertedNumber = converted.toString().replace(/,/g , " ")
  this.setState({
    num: convertedNumber
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Super Size Me</h1>
          <p className="sub-title">Any number typed in will return the largest number with the same integers</p>
          <h3 className="content">{this.state.num}</h3>
        </header>
       <div className='input-wrapper'>
       <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handleChange }
        className='input-field'
        placeholder='Numbers'
         /> 
        <button 
        className="button-thing"
        onClick={() => this.convertToNum(this.state.value)}
         >Convert to Number</button>
       </div>
      </div>
    );
  }
}

export default App;
