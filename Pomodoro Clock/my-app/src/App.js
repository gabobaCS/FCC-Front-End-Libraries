import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Display from './components/Display';
import Buttons from './components/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faRedoAlt, faQuestionCircle, faBars, faTimes, faLongArrowAltRight, faLongArrowAltLeft, faPause } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faPlay, faRedoAlt, faQuestionCircle, faBars, faTimes, faLongArrowAltRight, faLongArrowAltLeft, faPause)

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      timerMinutes: 25,
      timerSeconds: '00',
      timerGoing: false
    }
    this.handleTimer = this.handleTimer.bind(this);
    this.handleAnimation = this.handleAnimation.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);

  }
  handleTimer(interval){
    let seconds = this.state.timerSeconds
    if(this.state.timerSeconds == '00'){
      this.setState({
        timerMinutes: this.state.timerMinutes - 1,
        timerSeconds: '59'
      })
    }
    else if (this.state.timerSeconds <= 10){
      this.setState({
        timerSeconds: '0'+ String(this.state.timerSeconds - 1)
      })
    }
    else {
      this.setState({
        timerSeconds: this.state.timerSeconds - 1
      })
    }
    if (this.state.timerMinutes == 0 && this.state.timerSeconds == 0 ){
      clearInterval(interval);
      this.setState({
        timerMinutes: 25,
        timerSeconds: '00'
      })
    }
  }
  pauseTimer(interval){
    clearInterval(interval);
    this.setState({
      timerGoing: false
    })
  }
  resetTimer(interval){
    clearInterval(interval);
    this.setState({
      timerMinutes: 25,
      timerSeconds: '00',
      timerGoing: false
    })
  }
  handleAnimation(){
    this.setState({
      timerGoing: true
    })
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Display timerMinutes={this.state.timerMinutes} timerSeconds={this.state.timerSeconds} timerGoing={this.state.timerGoing} />
        <Buttons  handleTimer={this.handleTimer} handleAnimation={this.handleAnimation} resetTimer={this.resetTimer} timerGoing={this.state.timerGoing} pauseTimer={this.pauseTimer}/>
      </div>
    );
  }
}

export default App;
