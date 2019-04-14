import React, { Component } from 'react';
import './Key.css';

class Calculator extends Component {
  render() {
    return (
      <div id={this.props.id} onClick={() => this.props.handleClick(this.props.text) }>{this.props.text}</div>
    );
  }
}

export default Calculator;
