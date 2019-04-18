import React, { Component } from 'react';
import './Display.css';

class Display extends Component{
  render(){
    return (
      <React.Fragment>
        <div className="display">
          <div className="timer">
              <h2>20:00</h2>
          </div>
          <svg width="15rem" height="15rem">
              <circle  className="circle" />
          </svg>
        </div>
      </React.Fragment>

    );
  }
}
 export default Display;
