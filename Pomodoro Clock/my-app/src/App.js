import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Display from './components/Display';
import Buttons from './components/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faRedoAlt, faQuestionCircle, faBars } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faPlay, faRedoAlt, faQuestionCircle, faBars)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Display />
        <Buttons />
      </div>
    );
  }
}

export default App;
