import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      value: '',
      letters: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.sortByEven.bind = this.sortByEven.bind(this)
}

handleChange(event) {
  this.setState({
    value: event.target.value
  })
}


sortByEven(string){
  var splitStr = string.split('')
  var newStringArr = []
  if(string.length < 2 || string.length > 100) {
    return "invalid string"
  } else {
  for(var i = 0; i < splitStr.length; i++) {
    if(i % 2 !== 0) {
      newStringArr.push(splitStr[i] + ' ')
    }
  }
  }
  this.setState({
    letters: newStringArr
  })
}
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Return Even String</h1>
          <p className="title">{this.state.letters}</p>
        </header>
        <div className='content-wrapper'>
       <input 
       type="text" 
       onChange={this.handleChange} 
       className='main-input' 
       placeholder='Enter Letters Here'
       />
       <button 
       onClick={() => this.sortByEven(this.state.value)}
       className='main-button'
       >SORT LETTERS BY NUMBER</button>
        </div>
      </div>
    );
  }
}

export default App;
