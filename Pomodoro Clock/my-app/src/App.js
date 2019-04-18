import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Display from './components/Display';
import Buttons from './components/Buttons';

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
