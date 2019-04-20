import React, { Component } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Sidebar extends Component{
  constructor(props){
    super(props)
    this.state = {
      displayMenu: false,
    }
    this.handleSessionChange = this.handleSessionChange.bind(this);
    this.handleBreakChange = this.handleBreakChange.bind(this);
    this.handleArrow = this.handleArrow.bind(this);
  }
  handleSessionChange(e){
    this.props.handleSidebar('timerMinutes', e.target.value)
  }
  handleBreakChange(e){
    this.props.handleSidebar('breakMinutes', e.target.value)
  }
  handleArrow(stateName, newValue){
    if(newValue > 0 && newValue < 61){
      this.props.handleSidebar(stateName, newValue)
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
            <input type="range" min="1" max="60" value={this.props.timerMinutes} onChange={this.handleSessionChange}/>
            <div className="arrows">
              <FontAwesomeIcon icon="long-arrow-alt-left" id="session-decrement" onClick={() => this.handleArrow('timerMinutes', this.props.timerMinutes - 1)}/>
              <FontAwesomeIcon icon="long-arrow-alt-right" id="session-increment" onClick={() => this.handleArrow('timerMinutes', parseInt(this.props.timerMinutes) + 1)}/>
            </div>
            <p id="session-label">{this.props.timerMinutes} {this.props.timerMinutes == 1?'Minute':'Minutes'}</p>

          <div className="lineBreak"></div>
            <h2>Break Time</h2>
            <input id="break-length" type="range" min="1" max="60" value={this.props.breakMinutes} onChange={this.handleBreakChange}/>
              <div className="arrows">
                <FontAwesomeIcon icon="long-arrow-alt-left" id="break-decrement" onClick={() => this.handleArrow('breakMinutes', parseInt(this.props.breakMinutes) - 1)}/>
                <FontAwesomeIcon icon="long-arrow-alt-right" id="break-increment" onClick={() => this.handleArrow('breakMinutes', parseInt(this.props.breakMinutes) + 1)}/>
              </div>
            <p id="break-label">{this.props.breakMinutes} {this.props.breakMinutes == 1?'Minute':'Minutes'}</p>
          </div>
      </div>
      </React.Fragment>

    );
  }
}
 export default Sidebar;
