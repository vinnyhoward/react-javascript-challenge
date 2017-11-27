import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      value: '',
      fib: '',
    }
    this.fibFunc= this.fibFunc.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.fizzBuzz= this.fizzBuzz.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  fibFunc(n) {
    if(n === NaN) {
      var notNumber = 'Sorry not a number'
      this.setState({
        fib: notNumber
      })
    } else {
    var newArray = [1 + ', ']
    var a = 0, b = 1, f = 1;
      for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
        newArray.push(f + ', ')
    }
    this.setState({
      fib: newArray
    })
  }
  }

  fizzBuzz(arr) {
    for(var f = 1; f <= arr.length; f++) {
    var fizzBuzzArray = [];
    if( f % 3 === 0 && f % 5 === 0 ) {
      f = 'FizzBuzz'
      fizzBuzzArray.push(f)
    } else if( f % 5 === 0 ) {
      f = 'Buzz'
      fizzBuzzArray.push(f)
    } else if( f% 3 === 0 ) {
      f = 'Fizz'
      fizzBuzzArray.push(f)
    } else {
      fizzBuzzArray.push(f)
    }
  }
    this.setState({
      fib: fizzBuzzArray
    })

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fibonacci's FizzBuzz</h1>
          <h4 className="fib-sequence">{this.state.fib}</h4>
        </header>
        <div className='input-wrapper'>
        <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handleChange }
        className='input-field'
        placeholder='Number'
         /> 
         <button 
        className="button-thing"
        onClick={() => this.fibFunc(this.state.value)}
         >Fib Me</button>
         <button 
        className="button-thing"
        onClick={() => this.fizzBuzz(this.state.fib)}
         >FizzBuzz Me</button>
         </div>
      </div>
    );
  }
}

export default App;
