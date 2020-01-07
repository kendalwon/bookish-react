import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <div className="navBar">
        <div className="navTitle">
          <h1 className="title">Bookish</h1>
          <h2 className="tagline">raising readers</h2>
        </div>
        <ul className="menuList">
          <li className="navLink"><a href=".">tips</a></li>
          <li className="navLink"><a href=".">reads</a></li>
          <li className="navLink"><a href=".">toys</a></li>
          <li className="navLink"><a href=".">stores</a></li>
        </ul>
        <div className="dropdown">
          <div 
            onClick={ this.handleClick }
            className={ this.state.active ? "dropbtn change" : "dropbtn" }>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className={ this.state.active ? "dropdown-content show" : "dropdown-content" }>
            <a href=".">TIPS</a>
            <a href=".">READS</a>
            <a href=".">TOYS</a>
            <a href=".">STORES</a>
          </div>
        </div>   
      </div>
    );
  }
};

export default NavBar;
