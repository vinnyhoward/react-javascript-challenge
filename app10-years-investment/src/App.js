import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      investment: [],
      investmentAmount: [],
      principal: '',
      interest: '',
      tax: '',
      desired: ''
        }
        this.investAmount= this.investAmount.bind(this);
        this.handleChangePrincipal= this.handleChangePrincipal.bind(this);
        this.handleChangeInterest= this.handleChangeInterest.bind(this);
        this.handleChangeTax= this.handleChangeTax.bind(this);
        this.handleChangeDesired= this.handleChangeDesired.bind(this);
  }

handleChangePrincipal(event) {
  this.setState({
    principal: event.target.value
  })
  console.log(event.target.value);
}

handleChangeInterest(event) {
  this.setState({
    interest: event.target.value
  })
  console.log(event.target.value);
}

handleChangeTax(event) {
  this.setState({
    tax: event.target.value
  })
  console.log(event.target.value);
}

handleChangeDesired(event) {
  this.setState({
    desired: event.target.value
  })
  console.log(event.target.value);
}

  investAmount(principal, interest, tax, desired) {
    let years = 1
    const interestGain = principal * interest 
    const preTaxInvestment = principal + interestGain;
    const beforeTax = interestGain * tax
    const afterTax = preTaxInvestment - beforeTax;
  if(principal >= desired) {
    return 0
  } else {
    for(var i = afterTax; i <= desired; i++){
    years++
    var newInterest = i * interest
    var newTaxes = newInterest * tax
    var newInvestment = (i + newInterest) - newTaxes
  
    i = newInvestment;
    }
this.setState({
  investment: years,
  investmentAmount: i,
})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          {this.state.investment} Years {this.state.investmentAmount} Dollars
        </header>
        <div className='input-wrapper'>
        <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handleChangePrincipal }
        className='input-field'
        placeholder='Principal'
         /> 
        <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handleChangeInterest }
        className='input-field'
        placeholder='Interest'
         /> 
        <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handleChangeTax }
        className='input-field'
        placeholder='Tax'
         /> 
        <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handleChangeDesired }
        className='input-field'
        placeholder='Desired'
         /> 
         <button 
        className="button-thing"
        onClick={() => this.investAmount(this.state.principal, this.state.interest, this.state.tax, this.state.desired)}
         >Remove</button>
         </div>
      </div>
    );
  }
}

export default App;
