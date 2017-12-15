import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      value: '',
      letters: [],
    }
    this.handleChangeValue = this.handleChangeValue.bind(this)
    this.accumulate.bind = this.accumulate.bind(this)
}

handleChangeValue(event) {
  this.setState({
    value: event.target.value
  })
}

accumulate(s) {
  this.setState({
    letters: s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-')
  }) 
}

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Mumbling</h1>
          <div className="title">{this.state.letters}</div>
        </header>
        <div className='content-wrapper'>
       <input 
       type="text" 
       onChange={this.handleChangeValue} 
       className='main-input' 
       placeholder='Enter Random Letters Here'
       />
       <button 
       onClick={() => this.accumulate(this.state.value)}
       className='main-button'
       >Accumulate</button>
        </div>
      </div>
    );
  }
}

export default App;
