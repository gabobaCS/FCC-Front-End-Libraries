import React, { Component } from 'react';
import { MarkdownPreview } from 'react-marked-markdown';
import './Markdown.css';

class Markdown extends Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    document.getElementsByClassName('preview')[0].id = 'preview';
  }
  render(){

    return(
      <React.Fragment>
      <MarkdownPreview className='preview' id = 'preview' value={this.props.markdownText}
        markedOptions={{
          baseUrl: true,
          gfm: true,
          tables: true,
          breaks: true,
          sanitize: true,
          smartLists: true,
          smartypants: false
       }}/>
       </React.Fragment>
    )
  }
}

export default Markdown
