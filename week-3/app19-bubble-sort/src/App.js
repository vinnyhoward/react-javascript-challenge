import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      value: [9,7,5,3,1,2,4,6,8],
      sortNum: [9,7,5,3,1,2,4,6,8],
    }
    this.handleChangeValue = this.handleChangeValue.bind(this)
    this.bubbleSortNum.bind = this.bubbleSortNum.bind(this)
}

handleChangeValue(event) {
  this.setState({
    value: event.target.value
  })
}

bubbleSortNum = (intArr) => {
  for(var i = 0; i < intArr.length; i++){
    if(intArr[i] > intArr[i + 1]){
      let temp = intArr[i]
     intArr[i] = intArr[i+ 1]
     intArr[i+ 1] = temp
   }
 }
 this.setState({
  sortNum: intArr
})
}

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Bubble Sort</h1>
          <div className="title">{this.state.sortNum}</div>
        </header>
        <div className='content-wrapper'>
       <input 
       type="text" 
       onChange={this.handleChangeValue} 
       className='main-input' 
       placeholder='Enter New Numbers Here'
       />
       <button 
       onClick={() => this.bubbleSortNum(this.state.value)}
       className='main-button'
       >Sort</button>
        </div>
      </div>
    );
  }
}

export default App;
