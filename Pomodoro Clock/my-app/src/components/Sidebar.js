import React, { Component } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Sidebar extends Component{
  render(){
    return (
      <FontAwesomeIcon icon="bars" className="menu"/>
    );
  }
}
 export default Sidebar;
