import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      newNumberArray: '',
      value: '',

    }
    this.handleChange = this.handleChange.bind(this);
    this.bigToSmall = this.bigToSmall.bind(this);
    this.addSeparation = this.addSeparation.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
    console.log(event.target.value);
  }

  bigToSmall(arr) {
    const newArr = [].concat(...arr).sort((a, b) => b - a)
    this.setState({
      newNumberArray: newArr
    })
    console.log(newArr);
  }

  addSeparation(arr) {
    const separateItem = arr.join('>')
    this.setState({
      newNumberArray: separateItem
    })
    console.log(separateItem);
  }

  render() {
    console.log(this.state);
    // const reverseNumbers = this.state.newNumberArray.map((number, i) => {
    //   return <div key={i}>
    //     {number.input}
    //   </div>
    // })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Concat and Join</h1>
          <h3>{this.state.newNumberArray}</h3>
        </header>
        <input type="text" value={this.state.value} onChange={ this.handleChange } /> 
        <button className="button-thing" onClick={ () => this.bigToSmall( this.state.value ) }>Descend  Me</button>
        <button className="button-thing" onClick={ () => this.addSeparation( this.state.newNumberArray ) }>Separate Me</button>
      </div>
    );
  }
}

export default App;
