import React, { Component } from 'react';
import './Display.css';


class Display extends Component{
  constructor(props){
    super(props)

    this.totalTime = this.props.timerMinutes * 60 + parseInt(this.props.timerSeconds);


  }



  render(){
    let animation = {'animation': 'stroke '+this.totalTime+'s'+' linear backwards'};
    return (
      <React.Fragment>
        <div className="display">
          <div className="timer" id="time-left">
            <h3 id="timer-label">Session</h3>
              <h2 id="session-length">{this.props.timerMinutes}</h2><h2>:{this.props.timerSeconds}</h2>
          </div>
          <svg width="15rem" height="15rem">
              <circle  className="circle"  style={this.props.timerGoing?animation:{'animation':'none'}}/>
          </svg>
        </div>
      </React.Fragment>

    );
  }
}

 export default Display;
