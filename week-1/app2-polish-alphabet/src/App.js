import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props) {
  super(props)
  this.state={
    value: '',
    age: ''
  }
  this.handleChange = this.handleChange.bind(this);
  this.correctPolishLetters = this.correctPolishLetters.bind(this);
}
  
  
handleChange(event) {
  this.setState({
    value: event.target.value
  })
  console.log(event.target.value);
}


correctPolishLetters(string) {
  var correctPolish = string.replace("ą", "a" ).replace("ć", "c" ).replace("ę", "e" )
  .replace("ł", "l" ).replace("ń", "n" ).replace("ó", "o" ).replace("ś", "s" )
  .replace("ź", "z" ).replace("ż", "z" )
  this.setState({
    age: correctPolish 
  })
  console.log(correctPolish);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Polish Alphabet</h1>
        </header> 
        <input 
        type="text" 
        value={this.state.value} 
        placeholder='Enter Polish Here'
        onChange={ this.handleChange } /> 
        <button 
        className="button-thing" 
        onClick={ () => this.correctPolishLetters( this.state.value ) }
        >Check Console</button>
      </div>
    );
  }
}

export default App;
