import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      value: '',
      vowel: null,
      number: [],
      word: [],
    }
    this.handleChangeValue = this.handleChangeValue.bind(this)
    this.handleChangeNumber = this.handleChangeNumber.bind(this)
    this.checkVowel.bind = this.checkVowel.bind(this)
}
handleChangeValue(event) {
  this.setState({
    word: event.target.value
  })
}
handleChangeNumber(event) {
  this.setState({
    number: event.target.value
  })
}
checkVowel=(s,p)=> {
const filteredVowels = 'aeiouAEIOU'.includes(s[p])
  this.setState({
    vowel: filteredVowels
  })
  console.log(filteredVowels);
}

vowelChecked(){
  if(this.state.vowel === true) {
    return <div>True</div>
  } else if(this.state.vowel === false) {
    return <div>False</div>
  }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Most Digits</h1>
          <div className="title">{this.vowelChecked()}</div>
        </header>
        <div className='content-wrapper'>
       <input 
       type="text" 
       onChange={this.handleChangeValue} 
       className='main-input' 
       placeholder='Enter Words Here'
       />
          <input 
       type="text" 
       onChange={this.handleChangeNumber} 
       className='main-input' 
       placeholder='Enter Numbers Here'
       />
       <button 
       onClick={() => this.checkVowel(this.state.word, this.state.number)}
       className='main-button'
       >Find Vowel</button>
        </div>
      </div>
    );
  }
}

export default App;

