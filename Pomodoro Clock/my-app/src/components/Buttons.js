import React, { Component } from 'react';
import './Buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Buttons extends Component{
  constructor(props){
    super(props)

    this.startTimer = this.startTimer.bind(this);
  }


  startTimer(){
    this.interval = setInterval(() => this.props.handleTimer(this.interval), 1000);
    this.props.handleAnimation();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render(){
    return (
      <div className="buttons">
        <FontAwesomeIcon id="reset" icon="redo-alt" onClick={() => this.props.resetTimer(this.interval)} />
        {this.props.timerGoing?<FontAwesomeIcon icon="pause" onClick={() => this.props.pauseTimer(this.interval)} id="start_stop" className="play"/>:<FontAwesomeIcon icon="play" onClick={this.startTimer} id="start_stop" className="play"/>}
        <FontAwesomeIcon icon="question-circle" className="question" />
      </div>

    );
  }
}
 export default Buttons;
