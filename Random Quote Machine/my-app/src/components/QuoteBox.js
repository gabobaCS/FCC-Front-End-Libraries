import React, { Component } from 'react';
import './QuoteBox.css';
import Buttons from './Buttons'




class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      visible: true,
    };

    this.parseHTML = this.parseHTML.bind(this);
    this.assignQuote = this.assignQuote.bind(this);
    this.visibility = this.visibility.bind(this);
  }

  parseHTML(tags){
    let html = tags;
    let div = document.createElement('div');
    div.innerHTML = html;
    let str = div.textContent;
    return str;
  }

  assignQuote(){
    fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20', {cache: "no-store"})
    .then((response) => {
      return response.json();
    })
    .then((myJSON) => {
      for (let i = 0; i < myJSON.length; i++){
        if (this.parseHTML(myJSON[i].content).length < 50){
          this.setState({
            quote: this.parseHTML(myJSON[i].content),
            author: this.parseHTML(myJSON[i].title),
            visible: true
          });
          break
        }
      }
    })


    }
  visibility(){
    this.setState({
      visible: !this.state.visible
    })
  }

  componentDidMount(){
    this.assignQuote();
  }

  render(){
    return(
        <div id="quote-box">
          <div className="quote">
            <i className="fas fa-quote-left"></i>
            <h2 id="text" className={this.state.visible ? 'fadeIn' : 'fadeOut'}>{this.state.quote}</h2>
          </div>
          <h3 id="author" className={this.state.visible ? 'fadeIn' : 'fadeOut'}>-{this.state.author}</h3>
          <div className="bar"></div>
          <Buttons changeQuote={this.assignQuote} quote={this.state.quote} visible={this.visibility}/>
        </div>
    )
  }
}

export default QuoteBox;
