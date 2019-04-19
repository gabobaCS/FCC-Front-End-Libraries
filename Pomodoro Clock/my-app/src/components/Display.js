import React, { Component } from 'react';
import './Display.css';


class Display extends Component{
  constructor(props){
    super(props)

    this.state = {
      timer: 10,
      totalTime: '10s'
    }
    this.tick = this.tick.bind(this);
  }
  tick(){

    this.setState({
      timer: this.state.timer - 1,
    })
    if (this.state.timer == 0){
      clearInterval(this.interval)
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return (
      <React.Fragment>
        <div className="display">
          <div className="timer">
              <h2>{this.state.timer}</h2>
          </div>
          <svg width="15rem" height="15rem">
              <circle  className="circle"  style={{animation: 'stroke '+this.state.totalTime+' linear forwards'}}/>
          </svg>
        </div>
      </React.Fragment>

    );
  }
}

 export default Display;
