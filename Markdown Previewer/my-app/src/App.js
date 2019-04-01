import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBold, faItalic, faStrikethrough, faHeading, faList, faListOl, faCode, faQuoteLeft, faFile, faExchangeAlt }  from '@fortawesome/free-solid-svg-icons'
import Editor from './components/Editor';
import Header from './components/Header';
import Markdown from './components/Markdown';
import Modal from './components/Modal';

library.add(faBold, faItalic, faStrikethrough, faHeading, faList, faListOl, faCode, faQuoteLeft, faFile, faExchangeAlt);

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      'input': "# This is a Markdown Previewer\n\n## You can do all sorts of cool stuff\n\nLike **Bolding** text, or making it *italic*.\n\n1. You can.\n2. Make ordered Lists.\n\n- Or.\n- Unordered Lists.\n\n>*Quote whatever you want...*\n\nYou | Can\n--|--\nMake | Tables\n```javascript\n//You can write code.\nfunction writer(text){\n    return text;\n}\n```\n\n You can also [link](https://www.freecodecamp.org/) things.\n\n**All built by Gabriel Baca using React...**![React Logo](https://www.shareicon.net/data/128x128/2016/07/08/117367_logo_512x512.png)",
      selection: {start: 0, end: 0},
      displayModal: false,
      displayEditor: true
    }

    this.updateState = this.updateState.bind(this)
  }

  updateState(key, newInput){
    this.setState({
      [key]: newInput
    })
  }

  componentDidMount(){
    document.getElementsByClassName('preview')[0].id = 'preview';
  }
  render() {
    return (
      <React.Fragment>
        <Modal displayModal={this.state.displayModal} updateState={this.updateState}/>
        <div id="App">
          <div className="Header">
            <Header input={this.state.input} displayEditor={this.state.displayEditor} selection={this.state.selection} updateState={this.updateState}/>
          </div>
          <div style={{display: this.state.displayEditor ? 'block' : 'none'}} className="Editor">
            <Editor input={this.state.input}  displayEditor={this.state.displayEditor} updateState={this.updateState}/>
          </div>
          <div style={{display: this.state.displayEditor ? 'none' : 'block'}} className="Markdown">
            <Markdown  displayEditor={this.state.displayEditor} markdownText={this.state.input}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
