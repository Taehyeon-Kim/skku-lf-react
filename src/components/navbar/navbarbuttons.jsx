import React, { Component } from 'react';
import './navbar.css'

class Navbarbuttons extends Component {
  handleClick = () => {
    this.props.onClick(this.props.campi);
  }

  render() {
    const {name, isClicked, isShow, parts} = this.props.campi;
    return (
      <>
        <button 
          className={"dropdown-btn " + (isClicked ? 'active' : '')}
          onClick = {this.handleClick}
        >
          · {name}
        </button>
        <div className="dropdown-container" style={{ display : (isShow ? 'block' : 'none') }}>
          {/* <a href="#">· {parts}</a> */}
          {parts.map(parts => (
            <a href="#">· {parts}</a>
          ))}
        </div>
      </>
    );
  }
}

export default Navbarbuttons;
