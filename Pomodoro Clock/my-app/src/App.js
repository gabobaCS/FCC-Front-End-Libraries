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
      interval:null,
      timerMinutes: 25,
      timerSeconds: '00',
      timerMiliseconds: 0,
      breakMinutes: 5,
      timerGoing: false,
      timerDuration: 25 * 60,
      timerStatus: 'Start'
    }
    this.startTimer = this.startTimer.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handleAnimation = this.handleAnimation.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.handleSidebar = this.handleSidebar.bind(this);

  }
  startTimer(status, duration){
    this.setState({
      interval: setInterval(() => this.handleTimer(), 10),
      timerGoing: true,
      timerDuration: duration,
      timerStatus: status=='Start'?'Session':status
    })
  }
  handleTimer(interval){
    this.setState({
      timerMiliseconds: this.state.timerMiliseconds + 1,
    })

    if (this.state.timerMiliseconds % 100 == 0){
      let seconds = this.state.timerSeconds;
      console.log('milisec',this.state.timerMiliseconds);
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
        document.getElementById('beep').load();
        document.getElementById('beep').play();
        if(this.state.timerStatus == 'Session'){
          clearInterval(this.state.interval);
          this.setState({
            interval:null,
            timerMinutes: this.state.breakMinutes,
            timerSeconds: '00',
            timerMiliseconds: 0,
            timerGoing: false,
            timerStatus: 'Start'
          })
          this.startTimer('Break', this.state.breakMinutes * 60);
        }
        else{
          // clearInterval(this.state.interval);
          this.resetTimer();

        }

      }
    }
  }
  pauseTimer(){
    // clearInterval(interval);
    clearInterval(this.state.interval);
    this.setState({
      timerGoing: false,
    })
  }
  resetTimer(){
    // clearInterval(interval);
    clearInterval(this.state.interval);
    this.setState({
      timerMinutes: 25,
      timerSeconds: '00',
      timerMiliseconds: 0,
      breakMinutes: 5,
      timerGoing: false,
      timerDuration: 60 * 25,
      timerStatus:'Start'
    })
  }
  handleAnimation(){
    this.setState({
      timerGoing: true
    })
  }
  handleSidebar(stateKey, value){
    clearInterval(this.state.interval);

      this.setState({
        timerMinutes: this.state.timerMinutes == 0?1:this.state.timerMinutes,
        timerSeconds: '00',
        timerDuration: value * 60,
        timerGoing: false,
        timerStatus:'Start',
        [stateKey]:value,
      })

}




  render() {
    return (
      <div className="App">
        <audio id="beep" preload="auto"
          src="https://goo.gl/65cBl1"/>
        <Sidebar handleSidebar={this.handleSidebar} timerMinutes={this.state.timerMinutes} timerSeconds={this.state.timerSeconds} breakMinutes={this.state.breakMinutes} timerStaus={this.props.timerStaus}/>
        <Display timerMinutes={this.state.timerMinutes} timerSeconds={this.state.timerSeconds} timerGoing={this.state.timerGoing} timerMiliseconds={this.state.timerMiliseconds} timerDuration={this.state.timerDuration} timerStatus={this.state.timerStatus}/>
        <Buttons  startTimer={this.startTimer} handleAnimation={this.handleAnimation} resetTimer={this.resetTimer} timerGoing={this.state.timerGoing} pauseTimer={this.pauseTimer} timerStatus={this.state.timerStatus}/>
      </div>
    );
  }
}

export default App;
