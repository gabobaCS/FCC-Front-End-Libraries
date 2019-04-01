import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'

class Header extends Component{
  constructor(props){
    super(props);
    this.alterText = this.alterText.bind(this);
    this.addList = this.addList.bind(this);
    this.addCode = this.addCode.bind(this);
    this.addQuote = this.addQuote.bind(this);
    this.deleteEverything = this.deleteEverything.bind(this);
  }

  alterTextOneSelection(style, text){
    //Style is a sequence to put before and after the text. For example, style = '**'
    return this.props.input.slice(0, this.props.selection['start'])+style+text+style+this.props.input.slice(this.props.selection['start']);
  }
  alterTextTwoSelection(style){
    //Style is a sequence to put before and after the text. For example, style = '**'
    return this.props.input.slice(0, this.props.selection['start']) +style+ this.props.input.slice(this.props.selection['start'], this.props.selection['end'])+style+ this.props.input.slice(this.props.selection['end']);
  }
  alterText(style, text){
    if(this.props.selection){
      if (this.props.selection['start'] == this.props.selection['end']){
        let newInput = this.alterTextOneSelection(style, text);
        this.props.updateState('input', newInput);
        this.props.updateState('selection', null);
      }
      else{
        let newInput = this.alterTextTwoSelection(style);
        this.props.updateState('input', newInput);
        this.props.updateState('selection', null);
      }
    }
  }

  addList(char){
    //Handle selection
    const precededByNewline = this.props.input[this.props.selection['start'] - 1] == '\n' || this.props.input[this.props.selection['start'] - 1] ==  undefined;
    const start = this.props.selection['start'];
    const end = this.props.selection['end'];
    if (start == end){
      let newInput = (precededByNewline ? this.props.input.slice(0, start) + char +' List Item \n' + this.props.input.slice(start) : this.props.input.slice(0, start) +'\n'+char+' List Item \n' + this.props.input.slice(start));

      this.props.updateState('input', newInput);
    }
    else{
      //Adds a newLine if not preceded by one.
      let newInput = (precededByNewline ? this.props.input.slice(0, start)+char+' '+this.props.input.slice(start, end)+'\n'+ this.props.input.slice(end) : this.props.input.slice(0, start)+'\n'+ char + this.props.input.slice(start, end)+'\n'+ this.props.input.slice(end));
      //Updates input in App.js.
      this.props.updateState('input', newInput);
    }
  }

  addCode(){
    const start = this.props.selection['start'];
    const end = this.props.selection['end'];
    let newInput;
    if (start == end){
      newInput = this.props.input.slice(0, start) + '\n```\nLine of Code\n```\n' + this.props.input.slice(end);
      this.props.updateState('input', newInput);
    }
    else{
      newInput = this.props.input.slice(0, start) + '\n```\n' + this.props.input.slice(start, end) + '\n```\n' + this.props.input.slice(end);
    }
    this.props.updateState('input', newInput);
  }

  addQuote(){
    const start = this.props.selection['start'];
    const end = this.props.selection['end'];
    let newInput;
    if(start == end){
      newInput = this.props.input.slice(0, start) + '\n>Blockquote\n' + this.props.input.slice(end);
    }
    else{
      let selection = this.props.input.slice(start, end).split('\n').filter((elem) => elem != '').map((line) => {
        return '> '+line;
      }).join('\n');
      newInput = this.props.input.slice(0, start) + '\n' + selection + '\n' + this.props.input.slice(end);
    }
    this.props.updateState('input', newInput);
  }

  deleteEverything(){
    this.props.updateState('displayModal', true);
  }

  render(){
    console.log(this.props.displayEditor)
    return(
      <React.Fragment>
        <FontAwesomeIcon className="icon" onClick={() => this.alterText('**', 'Bold Text')} icon="bold" />
        <FontAwesomeIcon className="icon" onClick={() => this.alterText('*', 'Italic Text')} icon="italic" />
        <FontAwesomeIcon className="icon smaller" onClick={() => this.alterText('~~', 'Strikethrough Text')} icon="strikethrough" />
        <FontAwesomeIcon className="icon smaller" onClick={() => this.addList('-')} icon="list"/>
        <FontAwesomeIcon className="icon smaller" onClick={this.addCode} icon="code"/>
        <FontAwesomeIcon className="icon smaller" onClick={this.addQuote} icon="quote-left"/>
        <FontAwesomeIcon className="icon smaller exchange" onClick={() => this.props.updateState('displayEditor', !this.props.displayEditor)} icon="exchange-alt"/>
        <FontAwesomeIcon className="icon end" onClick={this.deleteEverything} icon="file"/>
      </React.Fragment>
    )
  }
}

export default Header
