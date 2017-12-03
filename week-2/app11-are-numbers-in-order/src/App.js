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
    this.superSizeThis = this.superSizeThis.bind(this)
  }
handleChange(event) {
  this.setState({
    value: event.target.value
  })
}

superSizeThis(num){
  var splitNum = num.toString()
  var newNumArr = []
  for(var i = 0; i < splitNum.length; i++) {
  newNumArr.push(+splitNum.charAt(i))
  }
  var highest = () => [].slice.call(newNumArr).sort(function(a,b){ 
      return (b - a)
  })
  var superSized = parseInt(highest().toString().replace(/,/g , ""))
  this.setState({
    num: superSized
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
        onClick={() => this.superSizeThis(this.state.value)}
         >Biggest Number</button>
       </div>
      </div>
    );
  }
}

export default App;
