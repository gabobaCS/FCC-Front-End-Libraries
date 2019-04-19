import React, { Component } from 'react';
import './Buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Buttons extends Component{
  render(){
    return (
      <div className="buttons">
        <FontAwesomeIcon id="reset" icon="redo-alt" />
        <FontAwesomeIcon icon="play" id="start_stop" className="play"/>
        <FontAwesomeIcon icon="question-circle" className="question" />
      </div>

    );
  }
}
 export default Buttons;
