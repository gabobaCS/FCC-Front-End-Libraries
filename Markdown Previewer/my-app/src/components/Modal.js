import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component{
  constructor(props){
    super(props)

    this.displayNone = this.displayNone.bind(this);
  }

  displayNone(){
    this.props.updateState('input', '');
    this.props.updateState('displayModal', false)

  }
  render(){
    return (
      <React.Fragment>
      <div style={{display: this.props.displayModal ? 'block' : 'none'}} className="modal-animation"></div>
      <div style={{display: this.props.displayModal ? 'flex' : 'none'}} className="modal">
        <div className="modal-content">
          <h3>Everything will be deleted</h3>
          <div className="bar"></div>
          <p>Everything will be deleted. Are you sure you want to continue?</p>
          <div className="buttons">
            <div id="delete" onClick={this.displayNone} className="button">Delete</div>
            <div id="cancel" onClick={() => this.props.updateState('displayModal', false)} className="button">Cancel</div>
          </div>
        </div>
      </div>
      </ React.Fragment>
    )
  }
}

export default Modal
