import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      value: '',
      digits: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.findMostDigits.bind = this.findMostDigits.bind(this)
}

handleChange(event) {
  this.setState({
    value: event.target.value
  })
}

findMostDigits = array => {
  var biggestNumber = '';
  var newNum = array.toString().split(',')
  for(var i = 0; i< newNum.length; i++){
      if(newNum[i].length > biggestNumber.length){
          biggestNumber = newNum[i];
       }
  }
  this.setState({
    digits: parseInt(biggestNumber)
  })
}
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Most Digits</h1>
          <p className="title">{this.state.digits}</p>
        </header>
        <div className='content-wrapper'>
       <input 
       type="text" 
       onChange={this.handleChange} 
       className='main-input' 
       placeholder='Enter Numbers Here'
       />
       <button 
       onClick={() => this.findMostDigits(this.state.value)}
       className='main-button'
       >Find</button>
        </div>
      </div>
    );
  }
}

export default App;

