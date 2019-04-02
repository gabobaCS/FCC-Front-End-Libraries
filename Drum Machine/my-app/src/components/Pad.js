import React, { Component } from 'react';
import './Pad.css';


class Pad extends Component{
  constructor(props){
    super(props)

    this.state = {
      animationDisplay: true
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(event){

    if (String.fromCharCode(event.keyCode) == this.props.text){
      this.setState({
        animationDisplay: !this.state.animationDisplay
      });
      document.getElementById(this.props.text).load();
      document.getElementById(this.props.text).play();
      this.props.updateNote(this.props.id);
    }
  }



  componentDidMount(){
    document.addEventListener("keyup", this.handleKeyUp, false);
      }

  handleClick(){
    this.setState({
      animationDisplay: !this.state.animationDisplay
    })
    this.props.updateNote(this.props.id);
    document.getElementById(this.props.text).load();
    document.getElementById(this.props.text).play();

  }

  render(){
    return (
      <div id={this.props.id} className={this.state.animationDisplay ? 'drum-pad animation' : 'drum-pad newAnimation'}  style={{background: this.props.color, boxShadow: this.props.glow}} onClick={this.handleClick}>{this.props.text}
        <audio id={this.props.text} src={this.props.track} className="clip">
          <source type="audio/wav"  />
        </audio>
      </div>
    )
  }
}

export default Pad
