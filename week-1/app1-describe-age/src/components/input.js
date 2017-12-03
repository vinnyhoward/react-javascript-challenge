import React, { Component } from 'react'

export default class Input extends Component {
constructor(props) {
  super(props)
  this.state={
    value: '',
    age: ''
  }
  this.handleChange = this.handleChange.bind(this);
  this.describeAge = this.describeAge.bind(this);
}


handleChange(event) {
  this.setState({
    value: event.target.value
  })
  console.log(event.target.value);
}

//Bonuses: 
//If string, output "Not an age"
//Appear visually on the screen
describeAge(num) {
  let howOld = num <= 12 ? "kid" 
  : num >= 13 && num <= 17 ? "teenager" 
  : num >= 18 && num <= 64 ? "adult"
  : "elderly" 
  this.setState({
    age: howOld
  })
  console.log("You're a(n) " + howOld);
}


  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={ this.handleChange } /> 
        <button className="button-thing" onClick={ () => this.describeAge( this.state.value ) }>Check Console</button>
      </div>
    )
  }
}
