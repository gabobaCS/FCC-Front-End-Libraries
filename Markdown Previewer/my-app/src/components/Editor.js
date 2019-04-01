import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component{
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    this.props.updateState('selection', {start: event.target.selectionStart, end: event.target.selectionEnd})
  }

  handleChange(event){
    this.setState({
      input: event.target.value
    });
    this.props.updateState('input', event.target.value);
    this.props.updateState('selection', {start: event.target.selectionStart, end: event.target.selectionEnd})
  }

  render(){

    return(
      <textarea id="editor" value={this.props.input} onKeyUp={this.handleClick} onChange={this.handleChange} onClick={this.handleClick}></textarea>
    )
  }
}

export default Editor
