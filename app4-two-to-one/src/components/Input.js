import React, { Component } from 'react'

export default class Input extends Component {
  constructor() {
    super()
    this.state={
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.addCombine = this.addCombine.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
    console.log(event.target.value);
  }


  addCombine(string) {
    var tempObj = {}; 
    var j = 1;
    for(var i = 0; i < string.length; i++) {
      tempObj[string[i]] = j;
      j++
    }
    var noDups = []
    for(var key in tempObj)
    noDups.push(key)
    var newString = noDups.sort().join('')

    this.props.addCombine(newString)
    console.log(newString);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={ this.handleChange } /> 
        <button className="button-thing" onClick={ () => this.addCombine( this.state.value ) }>ADD</button>
      </div>
    )
  }
}
