import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.changeQuote();
    this.props.visible();
  }

  render(){
    return(
    <div className="buttons-wrapper">
      <a id="tweet-quote" className="button" href={"http://twitter.com/intent/tweet/?text="+this.props.quote} target="_blank">
        <i className="fab fa-twitter"></i>
        <p>Post to Twitter</p>
      </a>



      <div id="new-quote" onClick={this.handleClick} className="button">
        <i className="fas fa-random"></i>
        <p>Random Quote</p>
      </div>
    </div>
    )
  }
};

export default Buttons
