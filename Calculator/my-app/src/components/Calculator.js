import React, { Component } from 'react';
import './Calculator.css';
import Key from "./Key"

function targetLastChunk(display){
  let newArray = display.split(/[-+\xf7\xd7]/);
  return newArray[newArray.length - 1];
}

function displayIntoArray(display){
  let displayArray = [];
  let buffer = '';
  for (let i = 0; i < display.length; i++){
    if (!['+', '-', String.fromCharCode(215), String.fromCharCode(247)].includes(display[i])){
      buffer += display[i]
    }
    else{
      displayArray.push(buffer)
      displayArray.push(display[i])
      buffer = ''
    }
  }
  displayArray.push(buffer)
  return displayArray;
}

function HandleCalculation(arr, symbol){
  let newArr = arr.slice(0);
  console.log(newArr)
  while(newArr.includes(symbol)){
  for (let i = 1; i < newArr.length; i = i + 2){
      if (newArr[i] == symbol){
        if(symbol == '+'){
          console.log('here')
          newArr.splice(i - 1, 3, Number(newArr[i-1])+Number(newArr[i+1]))
        }
        else if(symbol == '-'){
          newArr.splice(i - 1, 3, Number(newArr[i-1])-Number(newArr[i+1]))
        }
        else if(symbol == String.fromCharCode(215)){
          newArr.splice(i - 1, 3, Number(newArr[i-1])*Number(newArr[i+1]))
        }
        else if(symbol == String.fromCharCode(247)){
          newArr.splice(i - 1, 3, Number(newArr[i-1])/Number(newArr[i+1]))
        }
      }
    }
  }
  return newArr
}

class Calculator extends Component {
  constructor(props){
    super(props)
    this.operators = ['+', '-', String.fromCharCode(215), String.fromCharCode(247)]
    this.state = {
      display: ""
    }
    this.updateDisplay = this.updateDisplay.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleResult = this.handleResult.bind(this);
  }

  clearInput(input){
    this.setState({
      display:'0'
    })
  }

  updateDisplay(input){
    if (input == '.'){
      //Checks if there is already a '.' in the current number chunk
      if (!targetLastChunk(this.state.display).includes('.')){
        this.setState({
          display: this.state.display + input
        })
      }
    }
    else if(this.state.display == '0' || this.state.display == 'Error'){
      this.setState({
        display: input
      })
    }
    else{
      this.setState({
        display: this.state.display + input
      })
    }
  }

  handleOperation(input){
    if (this.state.display != "" && this.state.display != '0' && !this.operators.includes(this.state.display[this.state.display.length - 1])){
        this.setState({
          display: this.state.display + input
        })
      }
      else if (this.operators.includes(this.state.display[this.state.display.length - 1])){
        this.setState({
          display: this.state.display.slice(0, this.state.display.length - 1) + input
        })
      }
    }

    handleResult(){
      let displayArray = displayIntoArray(this.state.display);
      if (displayArray.includes('')){
        this.setState({
          display: 'Error'
        })
      }
      else{
        displayArray = HandleCalculation(displayArray, String.fromCharCode(215))
        displayArray = HandleCalculation(displayArray, String.fromCharCode(247))
        displayArray = HandleCalculation(displayArray,'-')
        displayArray = HandleCalculation(displayArray, '+')

        // displayArray = HandleCalculation(displayArray, )
      }
      console.log('disparr',displayArray)

      this.setState({
        display: displayArray[0]
      })
    }

  render() {
    return (
        <div className="calculator">
          <div id="display">
            <div className="insideDisplay">
                {this.state.display}
            </div>
          </div>
          <Key id="add" handleClick={this.handleOperation} text="+"/>
          <Key id="subtract" handleClick={this.handleOperation} text="-"/>
          <Key id="multiply" handleClick={this.handleOperation} text={String.fromCharCode(215)}/>
          <Key id="divide" handleClick={this.handleOperation} text={String.fromCharCode(247)}/>
          <Key id="seven" handleClick={this.updateDisplay} text="7"/>
          <Key id="eight" handleClick={this.updateDisplay} text="8"/>
          <Key id="nine" handleClick={this.updateDisplay} text="9"/>
          <Key id="four" handleClick={this.updateDisplay} text="4"/>
          <Key id="five" handleClick={this.updateDisplay} text="5"/>
          <Key id="six" handleClick={this.updateDisplay} text="6"/>
          <Key id="one" handleClick={this.updateDisplay} text="1"/>
          <Key id="two" handleClick={this.updateDisplay} text="2"/>
          <Key id="three" handleClick={this.updateDisplay} text="3"/>
          <Key id="zero" handleClick={this.updateDisplay} text="0"/>
          <Key id="decimal" handleClick={this.updateDisplay} text="."/>
          <Key id="clear" handleClick={this.clearInput} text="C"/>
          <Key id="equals" handleClick={this.handleResult} text="="/>
        </div>
    );
  }
}

export default Calculator;
