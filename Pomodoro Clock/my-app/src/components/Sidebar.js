import React, { Component } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Sidebar extends Component{
  constructor(props){
    super(props)
    this.state = {
      displayMenu: false,
      sessionValue: 25,
      breakValue: 5
    }
    this.handleSessionChange = this.handleSessionChange.bind(this);
    this.handleBreakChange = this.handleBreakChange.bind(this);
    this.handleArrow = this.handleArrow.bind(this);
  }
  handleSessionChange(e){
    this.setState({
      sessionValue: e.target.value
    })
  }
  handleBreakChange(e){
    this.setState({
      breakValue: e.target.value
    })
  }
  handleArrow(stateName, newValue){
    console.log(stateName)
    if(newValue > 0 && newValue < 61){
      this.setState({
        [stateName]: newValue
      })
    }
  }
  render(){
    return (
      <React.Fragment>
        <FontAwesomeIcon icon="bars" className="bars" onClick={() => this.setState({displayMenu:true})}/>
        <div className="menu" style={this.state.displayMenu?{'display':'block'}:{'display':'none'}}>

          <FontAwesomeIcon icon="times" className="close" onClick={()=>this.setState({displayMenu:false})}/>
          <div className="sliders">
            <h2>Session Time</h2>
            <input type="range" min="1" max="60" value={this.state.sessionValue} onChange={this.handleSessionChange}/>
            <div className="arrows">
              <FontAwesomeIcon icon="long-arrow-alt-left" id="session-decrement" onClick={() => this.handleArrow('sessionValue', this.state.sessionValue - 1)}/>
              <FontAwesomeIcon icon="long-arrow-alt-right" id="session-increment" onClick={() => this.handleArrow('sessionValue', parseInt(this.state.sessionValue) + 1)}/>
            </div>
            <p id="session-label">{this.state.sessionValue} {this.state.sessionValue == 1?'Minute':'Minutes'}</p>

          <div className="lineBreak"></div>
            <h2>Break Time</h2>
            <input id="break-length" type="range" min="1" max="60" value={this.state.breakValue} onChange={this.handleBreakChange}/>
              <div className="arrows">
                <FontAwesomeIcon icon="long-arrow-alt-left" id="break-decrement" onClick={() => this.handleArrow('breakValue', this.state.breakValue - 1)}/>
                <FontAwesomeIcon icon="long-arrow-alt-right" id="break-increment" onClick={() => this.handleArrow('breakValue', this.state.breakValue + 1)}/>
              </div>
            <p id="break-label">{this.state.breakValue} {this.state.breakValue == 1?'Minute':'Minutes'}</p>
          </div>
      </div>
      </React.Fragment>

    );
  }
}
 export default Sidebar;
