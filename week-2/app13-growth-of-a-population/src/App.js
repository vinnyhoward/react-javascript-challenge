import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      years: [],
      starting: [],
      percent: [],
      aug: [],
      targetPop: [],
    }
    this.handleChangeStarting = this.handleChangeStarting.bind(this)
    this.handlePercent = this.handlePercent.bind(this)
    this.handleAug = this.handleAug.bind(this)
    this.handleTargetPop = this.handleTargetPop.bind(this)
    this.populationGrowth = this.populationGrowth.bind(this)
  }
handleChangeStarting(event) {
  this.setState({
  starting: event.target.value
})
}

handlePercent(event) {
  this.setState({
  percent: event.target.value
  })
}

handleAug(event) {
  this.setState({
  aug: event.target.value
  })
}

handleTargetPop(event) {
  this.setState({
  targetPop: event.target.value
  })
}

populationGrowth(p0, percent, aug, p){
  var years = 1;
  var i = p0 + (p0 * (percent * 0.01)) + aug
  for( i; i < p; i++) {
    i = i + (i * (percent * 0.01)) + aug
    years++
  }
  var newYears = years
  this.setState({
    years: newYears
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Target Population</h1>
          <p className="sub-title">Find out how many years till you get your target population</p>
          <h3 className="content">{this.state.years}</h3>
        </header>
       <div className='input-wrapper'>
       <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handleChangeStarting }
        className='input-field'
        placeholder='Starting Population'
         /> 
        <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handlePercent }
        className='input-field'
        placeholder='Growth By Percent'
         /> 
        <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handleAug }
        className='input-field'
        placeholder='Leaving/Entering Population'
         /> 
        <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handleTargetPop }
        className='input-field'
        placeholder='Desired Population'
         /> 
        <button 
        className="button-thing"
        onClick={() => this.populationGrowth(this.state.starting, 
          this.state.percent,  
          this.state.aug,
          this.state.targetPop)}
         >YEARS TILL TARGET</button>
       </div>
      </div>
    );
  }
}

export default App;
