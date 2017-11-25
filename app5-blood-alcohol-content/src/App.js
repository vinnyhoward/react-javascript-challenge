import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
  super()
  this.state = {
    ounces: '',
    alcohol: '',
    weight: '',
    sex: '',
    time: '',
    lit: 0
  }
  this.handleChangeOunces = this.handleChangeOunces.bind(this);
  this.handleChangeAlcohol = this.handleChangeAlcohol.bind(this);
  this.handleChangeWeight = this.handleChangeWeight.bind(this);
  this.handleChangeSex = this.handleChangeSex.bind(this);
  this.handleChangeTime = this.handleChangeTime.bind(this);
  this.areYouLit = this.areYouLit.bind(this);
}
handleChangeOunces(event) {
  this.setState({
    ounces: event.target.value
  })
}
handleChangeAlcohol(event) {
  this.setState({
    alcohol: event.target.value
  })
}
handleChangeWeight(event) {
  this.setState({
    weight: event.target.value
  })
}
handleChangeSex(event) {
  this.setState({
    sex: event.target.value
  })
}
handleChangeTime(event) {
  this.setState({
    time: event.target.value
  })
}
areYouLit(ounces, alcohol, weight, sex, time) {
  var alcoholContent = ounces * alcohol * 5.14
  var timePassed = .015 * time
  if( sex === 'female' ) {
    var female = Number(((alcoholContent / weight * 0.66) - timePassed).toFixed(4))
    this.setState({
      lit: female
    })
    console.log('female', female);
  } else if( sex === 'male' ) {
    var male = Number(((alcoholContent / weight * 0.73) - timePassed).toFixed(4))
    this.setState({
      lit: male 
    })
    console.log('male', male);
  }

console.log('lit stats', this.state.ounces, this.state.alcohol, this.state.weight, this.state.sex, this.state.time);
}
  render() {
console.log('ounces', this.state.ounces);
console.log('alcohol', this.state.alcohol);
console.log('weight', this.state.weight);
console.log('sex', this.state.sex);
console.log('time', this.state.time);
console.log('lit', this.state.lit);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Are You Too Lit?</h1>
          <h3>
            {(this.state.lit >= 0.05) ? 
            <div className={(this.state.lit === 0 ? 'none' : 'show' )}> {this.state.lit}? You're drunk call an Uber</div> 
            : <div  className={(this.state.lit === 0 ? 'none' : 'show' )}> You aren't that lit, you're only {this.state.lit} </div>  }
            </h3>
        </header>
        <div className='alcohol-forms-wrapper'>
        <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handleChangeOunces }
        className='input-field'
        placeholder='Drink in Ounces'
         /> 
         <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handleChangeAlcohol }
        className='input-field'
        placeholder='Alcohol Percentage'
         /> 
         <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handleChangeWeight }
        className='input-field'
        placeholder='Weight(lbs)'
         /> 
         <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handleChangeSex }
        className='input-field'
        placeholder='Sex'
         /> 
         <input 
        type="text" 
        value={this.state.value} 
        onChange={ this.handleChangeTime }
        className='input-field'
        placeholder='Time Since Consumption'
         /> 
         <button 
        className="button-thing"
        onClick={ () => this.areYouLit( this.state.ounces, 
        this.state.alcohol, 
        this.state.weight, 
        this.state.sex,
        this.state.time ) }
         >CHECK IF LIT</button>
         </div>
      </div>
    );
  }
}

export default App;
