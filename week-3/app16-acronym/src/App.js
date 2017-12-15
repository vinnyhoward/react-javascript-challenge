import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      value: '',
      firstLetter: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.makeString.bind = this.makeString.bind(this)
}

handleChange(event) {
  this.setState({
    value: event.target.value
  })
}

makeString = s => {
  this.setState({
    firstLetter: s.split(' ').map(x => x[0]).join('')
  })
}
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Create an Acronym</h1>
          <p className="title">{this.state.firstLetter}</p>
        </header>
        <div className='content-wrapper'>
       <input 
       type="text" 
       onChange={this.handleChange} 
       className='main-input' 
       placeholder='Enter Words Here'
       />
       <button 
       onClick={() => this.makeString(this.state.value)}
       className='main-button'
       >CREATE</button>
        </div>
      </div>
    );
  }
}

export default App;

