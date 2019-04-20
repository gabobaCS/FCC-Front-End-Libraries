import React, { Component } from 'react';
import './Display.css';


class Display extends Component{
  constructor(props){
    super(props)

    this.totalTime = this.props.timerDuration;
  }

  render(){
    return (
      <React.Fragment>
        <div className="display">
          <div className="timer" id="time-left">
            <h3 id="timer-label">{this.props.timerStatus}</h3>
              <h2 id="session-length">{this.props.timerMinutes}</h2><h2>:{this.props.timerSeconds}</h2>
          </div>
          <svg width="15rem" height="15rem">
              <circle  className={this.props.timerStatus == 'Start'?'circle':this.props.timerStatus == 'Session'?'circle animation':'circle animation2'} style={this.props.timerGoing?{'animationDuration':this.props.timerDuration+'s', 'animationPlayState':'running'}:{'animationDuration':this.props.timerDuration+'s','animationPlayState':'paused'}}/>
          </svg>
        </div>
      </React.Fragment>

    );
  }
}

 export default Display;
