import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      value: '',
      number: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.sortNumber.bind = this.sortNumber.bind(this)
}

handleChange(event) {
  this.setState({
    value: event.target.value
  })
}


sortNumber(integers){
  var evenNum = []
  var oddNum = []
  for(var i = 0; i < integers.length; i++) {
    if( integers[i] % 2 !== 0 ) {
      oddNum.push(integers[i])
    }
  }
  for(var j = 0; j < integers.length; j++) {
    if( integers[j] % 2 === 0 ) {
      evenNum.push(integers[j])
    }
  }
  if ( evenNum.length < oddNum.length) {
    this.setState({
      number: evenNum[0]
    }) 
  } else {
    this.setState({
      number: oddNum[0]
    }) 
  }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Return Even String</h1>
          <p className="title">{this.state.number}</p>
        </header>
        <div className='content-wrapper'>
       <input 
       type="text" 
       onChange={this.handleChange} 
       className='main-input' 
       placeholder='Enter Numbers Here'
       />
       <button 
       onClick={() => this.sortNumber(this.state.value)}
       className='main-button'
       >FIND OUTLIER</button>
        </div>
      </div>
    );
  }
}

export default App;
